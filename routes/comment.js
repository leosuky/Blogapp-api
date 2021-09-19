const router = require('express').Router();
const Comment = require('../models/Comments');
const Post = require('../models/Posts');

// CREATE COMMENT //
router.post("/:postid/comment", async(req,res) => {
    try {
        const newComment = new Comment({
            parentId: req.params.postid,
            username: req.body.username,
            text: req.body.text
        });

        const comment = await newComment.save();
        await Post.findByIdAndUpdate(
            req.params.postid,
            { $push: { comments: comment._id }}
        )
        res.status(200).json(comment);

    } catch (err) {
        res.status(500).json(err);
    }
})

// GET COMMENT //
router.get("/:id", async (req, res) => {
    try {
        const getComment = await Comment.findById( req.params.id )

        res.status(200).json(getComment);

    } catch (err) {
        res.status(500).json(err);
    }
})

// UPDATE COMMENT //
router.put('/update/:id', async (req, res) => {
    try {
        const updateComment = await Comment.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updateComment);

    } catch (err) {
        res.status(500).json(err);
    }
})

// GET ALL COMMENTS IN A POST //
router.get("/a/:postid", async (req, res) => {
    try {
        const allComments = await Post.findById(req.params.postid).populate("comments").select("title comments")

        res.status(200).json(allComments);

    } catch (err) {
        res.status(500).json(err);
    }
})

// DELETE COMMENT //
router.delete("/delete/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("Comment Successfully deleted!!");

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;