import User from "../../../../database/models/user"
import connectionDB from "../../../../database/connectionDB"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async(req,res) => {
    const{uid} = req.query;
    const UserDetailsId = await User.findOne({_id:uid})
    res.status(200).json(UserDetailsId)
}