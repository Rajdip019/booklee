
import connectionDB from "../../../database/connectionDB"
import Donatebook from "../../../database/models/donatebook"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        try{
            const {id , seller_mail } = req.body;  // Destructuring the info got from the body.
            if(!id || !seller_mail){ //Checking if all Data is Given.
                return res.json({error: "Please fill all the fields."})
            }
            await Donatebook.findByIdAndDelete(id)

        }catch(e){
            console.log("Something wen wrong!" , e );
        }
  }
}
