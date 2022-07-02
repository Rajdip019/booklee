import connectionDB from "../../../database/connectionDB"
import DonateNGObook from "../../../database/models/donateNGObook"

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req,res)=> {
    if(req.method === "POST") //As it is a post Method we nedd to Sepecify that.

    {
        try{
            const {nameUser, email, condition, category, address, landmark, country, state, city, pin, quantity, addressNGO, countryNGO, cityNGO, pinNGO, nameNGO} = req.body;  // Destructuring the info got from the body.
            if(!nameUser || !email || !condition || !category || !address || !landmark || !country || !state || !city || !pin || !quantity || !addressNGO || !countryNGO || !cityNGO ||!pinNGO || !nameNGO){ //Checking if all Data is Given.
                return res.json({error: "Please fill all the fields."})
            }
    
            //If All data is there Saving the Data to SellBook Collection
    
            const donatedbook = await new DonateNGObook({
                nameUser,
                email,
                condition,
                category,
                address,
                landmark,
                country,
                state,
                city,
                pin,
                quantity,
                addressNGO,
                countryNGO,
                cityNGO,
                pinNGO,
                nameNGO
            }).save();
            res.status(201).json(donatedbook);

        }catch{
            console.log("Something wen wrong!" );
        }
  }
}
