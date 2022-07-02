import Donatebook from "../../../database/models/donatebook"
import connectionDB from "../../../database/connectionDB"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async(req,res) => {
    const{ pid } = req.query;
    const DonateBookDetails = await Donatebook.findOne({_id:pid})
    res.status(200).json(DonateBookDetails)
}
