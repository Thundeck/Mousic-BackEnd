const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PreviewSchema = new Schema({
    audio: {
        type:String
    },
    video:{
        type:String,
    },
    duration: {
        type:Number
    },
})

const PreviewModel = mongoose.model("preview", PreviewSchema)

module.exports = PreviewModel