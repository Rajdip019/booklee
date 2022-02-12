import User from "../../../database/models/user";
import connectionDB from "../../../database/connectionDB";

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req, res) => {
  if (req.method === "POST") {
    //As it is a post Method we nedd to Sepecify that.

    const { phone, email, address, landmark, country, state, city, pin, study, college, school } =
      req.body; // Destructuring the info got from the body.
    //If All data is there Saving the Data to SellBook Collection

    await User.findOneAndUpdate(
      { email: email }, //Finding and Updating the User Collection using the mail id of the user(got from body).
      {
        phone: phone,
        address: address,
        landmark: landmark,
        country: country,
        state: state,
        city: city,
        pin: pin,
        study: study,
        college: college,
        school: school
      }
    );
    res.status(201).json({ messege: "Updated Successfully" });
  }
}

