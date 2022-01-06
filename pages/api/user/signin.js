import connectionDB from "../../../database/connectionDB"
import User from "../../../database/models/user"
import { getSession } from "next-auth/react"


connectionDB();

const sessionHandler = async(req,res)=> {

        const session = await getSession({req});
        if(session !=null)
        {const {user} =session;
        const {name , email, image} = user;
        const UserDetails = await User.findOne({email:email})
        res.status(200).json(UserDetails);
        if(UserDetails === null){
            const newUser = await new User({
                name,
                email,
                image
            }).save()
        }}
      
  }

  export default sessionHandler;