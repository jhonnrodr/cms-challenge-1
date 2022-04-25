const Post = require('../models/post');

const getPosts =  async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.log(error.message);
        res.json({ message: error.message });
    }
}

const getPost =  async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id);
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
}

const createPost =  async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date
        });
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

const updatePost =  async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, {
            $set: {
                title: req.body.title,
                description: req.body.description,
            }
        });
        res.json(post);
    } catch (error) {
        res.json({ message: error.message });
    }
}

const deletePost =  async (req, res) => {
   try {
       const post = await Post.findByIdAndDelete(req.params.id);
        res.json(post);
   } catch (error) {
        res.json({ message: error.message });
   }
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost, 
    deletePost
}