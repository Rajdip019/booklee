import User from "../../../../database/models/user"
import connectionDB from "../../../../database/connectionDB"
connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        const {seller_mail} = req.body
        const {_id} = req.body    
            
            await User.updateOne({email:seller_mail}, //Finding and Updating the User Collection using the mail id of the user(got from body).
            {$addToSet : {favbookDid : {_id} }} ,//Pushing the Book ID in User Listed Book Array.
            console.log("pushed a product")
            )

}}