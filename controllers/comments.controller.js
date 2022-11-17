const Comment = require('../models/Comment.model');

module.exports.commentController = {
    addComment: async (req, res) => {
        const data = await Comment.create({
            text: req.body.text,
            user: req.body.user,
            twitt: req.body.twitt
        })
        return res.json('Комментарий добавлен!')
    },
    getComment: async (req, res) => {
        const data = await Comment.find().populate('user twitt')
        return res.json(data)
    },
    removeComment: async (req, res) => {
        const data = await Comment.findByIdAndRemove({
            _id: req.params.id
        })
        return res.json('Комментарий удален!')
    }
}