const router = require('express').Router();
const Post = require('../models/Posts');
const Comment = require('../models/Comments');

// CREATE POST //
router.post("/createpost", async(req,res) => {
    try {
        const newPost = new Post({
            username: req.body.username,
            title: req.body.title,
            content: req.body.content
        });

        const post = await newPost.save();
        res.status(200).json(post);

    } catch (err) {
        res.status(500).json(err);
    }
})

// UPDATE POST //
router.put('/update/:id', async (req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatePost);

    } catch (err) {
        res.status(500).json(err);
    }
})

// GET POST //
router.get("/:id", async (req, res) => {
    try {
        const getPost = await Post.findById( req.params.id)

        res.status(200).json(getPost);

    } catch (err) {
        res.status(500).json(err);
    }
})

// GET ALL POST //
router.get("/:l/:p", async (req, res) => {
    const ll = parseInt(req.params.l);
    const pp = parseInt(req.params.p);
    try {
        const getAllPost = await Post.find(req).limit(ll).skip((pp-1)*ll);

        res.status(200).json(getAllPost);

    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE POST //
router.delete("/delete/:id", async (req, res) => {
    try {
        await Comment.deleteMany({ parentId: req.params.id })
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post Successfully deleted!!");

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;