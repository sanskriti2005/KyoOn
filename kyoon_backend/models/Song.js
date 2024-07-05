const mongoose = require("mongoose");
//How to create a model
//Step1: Get mongoose
//Step2: Create a mongoose schema (structure of a user)

const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    track: {
        type: String,
        required: true,
    },
    artists: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    }
})

const SongModel = mongoose.model("Song", Song);

module.exports = SongModel;

