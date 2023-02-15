const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OBJECT = mongoose.Types.ObjectId


const UserSchema = new Schema({
    name: {
        type:String,
        require:true,
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
        type:[OBJECT]
    },
    albums_likes: {
        type:[OBJECT]
    },
    subscriptions: {
        type:[OBJECT] //ARTISTS ARRAY
    },
    email: {
        type:String,
        require:true,
        unique:true
    },
    historial: {
        type:[OBJECT] // TRACKS ARRAY
    },
    albums: {
        type:[OBJECT]
    },
    subs: {
        type:Number,
        default:0
    },
    traks: {
        type:[OBJECT]
    }
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel