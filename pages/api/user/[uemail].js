import User from "../../../database/models/user"
import connectionDB from "../../../database/connectionDB"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async(req,res) => {
    const{uemail} = req.query;
    const UserDetails = await User.findOne({email:uemail})
    res.status(200).json(UserDetails)
}