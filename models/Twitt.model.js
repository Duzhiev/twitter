const mongoose = require('mongoose');

const twittSchema = mongoose.Schema ({
    text: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }]
});

const Twitt = mongoose.model('Twitt', twittSchema);
module.exports = Twitt;