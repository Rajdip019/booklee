const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name :{
        type: String,
        required: true
    },
	email :{
        type: String,
        required: true
    },
	image :{
        type: String,
    },
	phone : {
        type: Number,
    },
    address : {
        type: String,
    },
    country : {
        type: String,
    },
    state : {
        type: String,
    },
    city : {
        type: String,
    },
    landmark : {
        type: String,
    },
    pin :{
        type: Number,
    },
	bookSid :{
        type: Array,
    },
    bookDid :{
        type: Array,
    },
    bookSoldid :{
        type: Array,
    },
    bookDonatedid :{
        type: Array,
    },
    favbookSid :{
        type: Array,
    },
    favbookDid :{
        type: Array,
    },
    orderBook_id :{
        type: Array,
    },
    getBook_id :{
        type: Array,
    },
    study: {
        type : String,
    },
    college: {
        type: String,
    },
    school: { 
        type: String,
    }
})

export default mongoose.models.User || mongoose.model("User", UserSchema)