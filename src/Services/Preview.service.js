const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllPreviews = async () =>{
    try {
        const data = await PreviewModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createPreview = async (body) => {

    const {audio,duration, track}  = body
    
    if(!audio) throw "Preview's audio is required"
    if(!duration) throw "Preview's duration is required"
    
    try {
    
        const created = await PreviewModel.create(body)
        const trackPreview = await TrackModel.findOneAndUpdate({id:track},{preview:created._id})
        return [created,trackPreview]
        
    } catch (error) {
        console.log(error)
    }
    }

module.exports = {
    getAllPreviews,
    createPreview
}