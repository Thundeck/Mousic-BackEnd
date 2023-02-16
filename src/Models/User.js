const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OBJECT = mongoose.Types.ObjectId


const UserSchema = new Schema({
    name: {
        type:String,
        require:true,
    },
    img: {
        type:String
    },
    lastname: {
        type:String,
        require:true,
    },
    nickname: {
        type:String,
        unique:true,
        require:true,
    },
    password: {
        type:String,
        require:true,
    },
    rol:{
        type:String,
        default:"user"
    },
    link: {
        type:String
    },
    tracks_likes: {
        type:[OBJECT],
        ref:"track"
    },
    albums_likes: {
        type:[OBJECT],
        ref:"album"
    },
    subscriptions: {
        type:[OBJECT],
        ref:"user" //ARTISTS ARRAY
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    historial: {
        type:[OBJECT],
        ref:"track" // TRACKS ARRAY
    },
    albums: {
        type:[OBJECT],
        ref:"album"
    },
    subs: {
        type:Number,
        default:0
    },
    tracks: {
        type:[OBJECT],
        ref:"track"
    }
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel