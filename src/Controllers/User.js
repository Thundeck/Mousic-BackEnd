const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllUsers = async (_req, res) =>{
    try {
        const Users = await UserModel.find()
        res.json([...Users,"si llega la info"])
    } catch (error) {
        console.log("this is the error",error)
    }
}

const createUser = async (req, res) =>{
    try {
        const Users = await UserModel.create(req.body)
        res.json(Users)
    } catch (error) {
        console.log("this is the error",error)
    }
}

module.exports = {
    getAllUsers,
    createUser
}