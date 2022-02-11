import SellBook from "../../../database/models/sellbook";
import connectionDB from "../../../database/connectionDB";

connectionDB(); //Checking/Connecting to CosmosDB database.

export default async (req, res) => {
  if (req.method === "POST") {
    //As it is a post Method we nedd to Sepecify that.

    const {id, name, author,condition, category, description, photo, price ,seller_mail, seller_id, adress, landmark, country, state, city, pin, study, college, school} =
      req.body; // Destructuring the info got from the body.
      if(!name || !author || !condition || !category || !description || !price || !seller_mail || !seller_id || !adress || !landmark || !country || !state || !city || !pin){ //Checking if all Data is Given.
        return res.json({error: "Please fill all the fields."})
    }


    await SellBook.findOneAndUpdate(
      { _id: id }, //Finding and Updating the User Collection using the id of the Book(got from body).
      {
        name,
        author,
        condition,
        category,
        description,
        photo,
        price,
        seller_mail,
        seller_id,
        adress,
        landmark,
        country,
        state,
        city,
        pin,
        study,
        college,
        school
      }
    );
    res.status(201).json({ messege: "Updated Successfully" });
  }
}