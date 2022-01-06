import User from "../../../database/models/user"
import connectionDB from "../../../database/connectionDB"
import Sellbook from "../../../database/models/sellbook"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {name, author,condition, category, description, photo, price ,seller_mail, seller_id, adress, landmark, country, state, city, pin} = req.body;  // Destructuring the info got from the body.
        if(!name || !author || !condition || !category || !description || !photo || !price || !seller_mail || !seller_id || !adress || !landmark || !country || !state || !city || !pin){ //Checking if all Data is Given.
            return res.json({error: "Please fill all the fields."})
        }

        //If All data is there Saving the Data to SellBook Collection

        const sellbook = await new Sellbook({
            name,
            author,
            condition,
            category,
            description,
            photo,
            price,
            seller_mail,
            seller_id,
            adress,
            landmark,
            country,
            state,
            city,
            pin
        }).save();
        res.status(201).json(sellbook);

        const id = await sellbook._id; //Getting the Id of the book just created.

        await User.updateOne({email:seller_mail}, //Finding and Updating the User Collection using the mail id of the user(got from body).
            {$push : {bookSid : [id] }} //Pushing the Book ID in User Listed Book Array.
            )
  }
}
