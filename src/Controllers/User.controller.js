const UserService = require("../Services/User.service")

const getAllUsers = async (_req, res) =>{
    try {
        const Users = await UserService.getAllUsers()
        res.json(Users)
    } catch (error) {
        res.status(400).send(error)
    }
}

const createUser = async (req, res) =>{
    try {
        const Users = await UserService.createUser(req.body)
        res.status(200).json(Users).end()
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    getAllUsers,
    createUser
}