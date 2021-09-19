const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        unique: true
    },

    content: {
        type: String,
        required: true
    },

    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]

},

    { timestamps: true }
)

const Post = mongoose.model('Post', PostSchema)

module.exports = Post;