import DonateBook from "../../../database/models/donatebook";
import connectionDB from "../../../database/connectionDB";

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req, res) => {
  if (req.method === "POST") {
    //As it is a post Method we nedd to Sepecify that.

    const {id, name, author,condition, description, photo ,seller_mail, seller_id, adress, landmark, country, state, city, pin} =
      req.body; // Destructuring the info got from the body.
      if(!name || !author || !condition || !description || !seller_mail || !seller_id || !adress || !landmark || !country || !state || !city || !pin){ //Checking if all Data is Given.
        return res.json({error: "Please fill all the fields."})
    }

    await DonateBook.findOneAndUpdate(
      { _id: id }, //Finding and Updating the User Collection using the id of the Book(got from body).
      {
        name,
        author,
        condition,
        description,
        photo,
        seller_mail,
        seller_id,
        adress,
        landmark,
        country,
        state,
        city,
        pin
      }
    );
    res.status(201).json({ messege: "Updated Successfully" });
  }
}