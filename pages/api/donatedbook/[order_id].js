import Donatedbook from "../../../database/models/donatedbook";
import connectionDB from "../../../database/connectionDB"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async(req,res) => {
    try{
        const{order_id} = req.query;
        const DonatedBookDetails = await Donatedbook.findOne({_id:order_id})
        res.status(200).json(DonatedBookDetails)
    }catch{
        console.log("Something went wrong!");
    }
}