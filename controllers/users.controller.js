const { json } = require('express');
const User = require('../models/User.model');

module.exports.userController = {
    addUser: async (req, res) => {
        const data = await User.create({
            name: req.body.name,
            saved: req.body.saved
        })
        return res.json('Пользователь добавлен!')
    },
    getUser: async (req, res) => {
        const data = await User.find().populate('saved')
        return res.json(data)
    },
    removeUser: async (req, res) => {
        const data = await User.findByIdAndRemove({
            _id: req.params.id
        })
        return res.json('Пользователь удален!')
    },
    patchUser: async (req, res) => {
        const data = await User.findByIdAndUpdate({
            _id: req.params.id
        },
        {
            name: req.body.name,
            saved: req.body.saved
        },{
            new: true
        })
        return res.json(data)
    },
    addSaved: async (req, res) => {
        await User.findByIdAndUpdate(req.params.userId, {
            $push: {saved: req.params.savedId}
        })
        return res.json('saved yes')
    },
    removeSaved: async (req, res) => {
        await User.findByIdAndUpdate(req.params.userId, {
            $pull: {saved: req.params.removeId}
        })
        return res.json('Saved removed')
    }
}