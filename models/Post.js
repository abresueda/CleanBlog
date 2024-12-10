const mongoose = require('mongoose');

//Post şeması
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    detail: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;