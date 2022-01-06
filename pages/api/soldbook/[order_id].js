import Soldbook from "../../../database/models/soldbook";
import connectionDB from "../../../database/connectionDB"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async(req,res) => {
    const{order_id} = req.query;
    const SoldBookDetails = await Soldbook.findOne({_id:order_id})
    res.status(200).json(SoldBookDetails)
}