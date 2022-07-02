import User from "../../../database/models/user"
import connectionDB from "../../../database/connectionDB"
import Donatedbook from "../../../database/models/donatedbook"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        try{
            const {name, author,condition, description, photo ,seller_mail, seller_name, buyer_mail, buyer_name, seller_id, adress, landmark, country, state, city, pin, date, time} = req.body;  // Destructuring the info got from the body.
            if(!name || !author || !condition || !description || !photo || !seller_mail || !seller_name || !buyer_mail || !buyer_name || !seller_id || !adress || !landmark || !country || !state || !city || !pin || !date || !time){ //Checking if all Data is Given.
                return res.json({error: "Please fill all the fields."})
                //If All data is there Saving the Data to SellBook Collection
        
                const donatedbook = await new Donatedbook({
                    name,
                    author,
                    condition,
                    description,
                    photo,
                    seller_mail,
                    seller_name,
                    buyer_mail,
                    buyer_name,
                    seller_id,
                    adress,
                    landmark,
                    country,
                    state,
                    city,
                    pin,
                    date,
                    time
                }).save();
                res.status(201).json(donatedbook);
        
                const id = await donatedbook._id; //Getting the Id of the book just created.
        
                await User.updateOne({email:seller_mail}, //Finding and Updating the User Collection using the mail id of the user(got from body).
                    {$push : {bookDonatedid : [id] }} //Pushing the Book ID in User Listed Book Array.
                    )
        
                await User.updateOne({email:buyer_mail}, //Finding and Updating the User Collection using the mail id of the user(got from body).
                    {$push : {getBook_id : [id] }} //Pushing the Book ID in User Listed Book Array.
                    )
            }
        }catch{
            console.log("Something went wrong!");
        }

  }
}
