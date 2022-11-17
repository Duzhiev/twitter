const Twitt = require('../models/Twitt.model');

module.exports.twittController = {
    addTwitt: async (req, res) => {
        const data = await Twitt.create({
            text: req.body.text,
            user: req.body.user,
            likes: req.body.Likes
        })
        return res.json('Твит добавлен')
    },
    getTwitt: async (req, res) => {
        const data = await Twitt.find().populate('user likes')
        return res.json(data)
    },
    removeTwitt: async (req, res) => {
        const data = await Twitt.findByIdAndRemove({
            _id: req.params.id
        })
        return res.json('Твит удален!')
    },
    patchTwitt: async (req, res) => {
        const data = await Twitt.findByIdAndUpdate({
            _id: req.params.id
        }, {
            text: req.body.text,
            user: req.body.user,
            likes: req.body.likes
        }, {
            new: true
        })
        return res.json(data)
    },
    addLike: async (req, res) => {
        await Twitt.findByIdAndUpdate(req.params.twittId, {
            $push: {likes: req.params.userId}
        })
        return res.json("like yes")
    },
    deleteLike: async (req, res) => {
        await Twitt.findByIdAndUpdate(req.params.twittId, {
            $pull: {likes: req.params.id}
        })
        return res.json('like removed')
    }
}