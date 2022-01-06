import connectionDB from "../../../database/connectionDB"
import DonateNGObook from "../../../database/models/donateNGObook"

connectionDB();

export default (req,res)=> {
    DonateNGObook.find().then(donateNGObooks=>{
    res.status(200).json(donateNGObooks)
  })
}

