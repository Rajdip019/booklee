const mongoose = require("mongoose");

const donateBookSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
	author :{
        type: String,
        required: true
    },
	photo :{
        type: String,
        required: true
    },
	condition : {
        type: Number,
        required: true
    },
    description :{
        type: String,
        required: true
    },
	seller_mail :{
        type: String,
        required: true
    },
    seller_id :{
        type: String,
        required: true
    },
    adress :{
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
        type: Number,
        required: true
    },
    college : {
        type: String,
    },
    school : {
        type: String
    }, 
    study: {
        type: String
    },
})

export default mongoose.models.Donatebook || mongoose.model("Donatebook", donateBookSchema)