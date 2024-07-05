const mongoose = require("mongoose");
//How to create a model
//Step1: Get mongoose
//Step2: Create a mongoose schema (structure of a user)

const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    songs:[ 
        {
            type: mongoose.Types.ObjectId,
            ref: "song"
        },
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    collaborators: [{
        type: mongoose.Types.ObjectId,
        ref: "user",
    }],
})

const PlaylistModel = mongoose.model("Playlist", Playlist);

module.exports = PlaylistModel;

