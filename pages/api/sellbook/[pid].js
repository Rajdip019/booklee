import Sellbook from "../../../database/models/sellbook"
import connectionDB from "../../../database/connectionDB"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async(req,res) => {
    const{pid} = req.query;
    const SellBookDetails = await Sellbook.findOne({_id:pid})
    res.status(200).json(SellBookDetails)
}
