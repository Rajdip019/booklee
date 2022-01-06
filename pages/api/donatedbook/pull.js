import User from "../../../database/models/user"
import connectionDB from "../../../database/connectionDB"
import mongoose from "mongoose"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {id , seller_mail } = req.body;  // Destructuring the info got from the body.
        if(!id || !seller_mail){ //Checking if all Data is Given.
            return res.json({error: "Please fill all the fields."})
        }
        const ObjId =  mongoose.Types.ObjectId(id);
        await User.findOneAndUpdate({email:seller_mail}, //Finding and Updating the User Collection using the mail id of the user(got from body).
        {$pull : {bookDid : ObjId}} //Pulling the Book ID in User Listed Book Array.
        )
  }
}
