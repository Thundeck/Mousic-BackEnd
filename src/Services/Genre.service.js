const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllGenres = async () =>{
    try {
        const data = await GenreModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createGenre = async (body) => {

const {name}  = body

if(!name) throw "Genre's name is required"

try {

    const created = await GenreModel.create(body)
    return created
    
} catch (error) {
    console.log(error)
}


}

module.exports = {
    getAllGenres,
    createGenre
}