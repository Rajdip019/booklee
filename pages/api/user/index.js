import connectionDB from "../../../database/connectionDB"
import User from "../../../database/models/user"

connectionDB();

export default (req,res)=> {
    User.find().then(users=>{
    res.status(200).json(users)
  })
}

