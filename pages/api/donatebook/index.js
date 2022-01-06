import connectionDB from "../../../database/connectionDB"
import Donatebook from "../../../database/models/donatebook"

connectionDB();

export default (req,res)=> {
    Donatebook.find().then(donatebooks=>{
    res.status(200).json(donatebooks)
  })
}
