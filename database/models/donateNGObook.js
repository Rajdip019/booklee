const mongoose = require("mongoose");

const donateNGOBookSchema = new mongoose.Schema({
    nameUser :{
        type: String,
        required: true
    },
	email :{
        type: String,
        required: true
    },
	condition :{
        type: String,
        required: true
    },
	category : {
        type: String,
        required: true
    },
    address :{
        type: String,
        required: true
    },
	landmark :{
        type: String,
        required: true
    },
    country :{
        type: String,
        required: true
    },
    state :{
        type: String,
        required: true
    },
    city :{
        type: String,
        required: true
    },
    pin :{
        type: String,
        required: true
    },
    quantity :{
        type: String,
        required: true
    },
    addressNGO :{
        type: String,
        required: true
    },
    countryNGO :{
        type: String,
        required: true
    },
    cityNGO :{
        type: String,
        required: true
    },
    pinNGO :{
        type: String,
        required: true
    },
    nameNGO :{
        type: String,
        required: true
    },
})

export default mongoose.models.DonateNGObook || mongoose.model("DonateNGObook", donateNGOBookSchema)