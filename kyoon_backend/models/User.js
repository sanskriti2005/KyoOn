const mongoose = require("mongoose");
//How to create a model
//Step1: Get mongoose
//Step2: Create a mongoose schema (structure of a user)

const User = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    likedSongs: {
        //Will be changed into an array later
        type: String,
        default: "",
    },
    likedPlaylists: {
        //Will be changed into an array later
        type: String,
        default: "",
    },
    subscribedArtists: {
        //Will be changed into an array later
        type: String,
        default: "",
    }
})

const UserModel = mongoose.model("User", User);

module.exports = UserModel;

