const express =  require("express")
const TrackModel = require("../Models/Track")
const AlbumModel = require("../Models/Album")
const GenreModel = require("../Models/Genre")
const PreviewModel = require("../Models/Preview")
const UserModel = require("../Models/User")

const getAllUsers = async () =>{
    try {
        const data = await UserModel.find()
        if (!data) throw "No data";
        return data;
    } catch (error) {
        console.log(error)
    }
}

const createUser = async (body) => {

    const {
        name,
        lastname,
        nickname,
        password,
        repeatPassword,
        email,
    } = body

    if (!name) throw "User's name is required";
    if (!lastname) throw "User's lastname is required";
    if (!nickname) throw "User's nickname is required";
    if (!password) throw "User's password is required";
    if (repeatPassword !== password) throw "it is necessary to repeat the password";
    if (repeatPassword !== password) throw "the password is different";
    if (!email) throw "User's email is required";

    try {
        const nick = await UserModel.findOne({nickname:nickname})
        if (nick) throw "nickname already in use"
        const address = await UserModel.findOne({email:email})
        if (address) throw "email already in use"

        const create = await UserModel.create(body)

        return create
        
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getAllUsers,
    createUser
}