
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(require('./routes/users.route'));
app.use(require('./routes/twitts.route'));
app.use(require('./routes/comments.route'));

mongoose.connect('mongodb+srv://Duzhiev:1234@cluster0.im2qvco.mongodb.net/Twitter?retryWrites=true&w=majority', () => {
    console.log('connected');
    app.listen(3000, () => {
        console.log('server started')
    })
})