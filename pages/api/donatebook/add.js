import User from "../../../database/models/user"
import connectionDB from "../../../database/connectionDB"
import Donatebook from "../../../database/models/donatebook"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {name, author,condition, description, photo, seller_mail, seller_id,  adress, landmark, country, state, city, pin} = req.body;  // Destructuring the info got from the body.
        if(!name || !author || !condition || !description || !photo || !seller_mail || !seller_id || !adress || !landmark || !country || !state || !city || !pin){ //Checking if all Data is Given.
            return res.json({error: "Please fill all the fields."})
        }

        //If All data is there Saving the Data to SellBook Collection

        const donatebook = await new Donatebook({
            name,
            author,
            condition,
            description,
            photo,
            seller_mail,
            seller_id,
            adress,
            landmark,
            country,
            state,
            city,
            pin
        }).save();
        res.status(201).json(donatebook);

        const id = await donatebook._id; //Getting the Id of the book just created.

        await User.updateOne({email:seller_mail}, //Finding and Updating the User Collection using the mail id of the user(got from body).
            {$push : {bookDid : [id] }} //Pushing the Book ID in User Listed Book Array.
            )
            
        

  }
}
