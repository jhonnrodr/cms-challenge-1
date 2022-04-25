const post = require('../models/post');

const getPosts =  async (req, res) => {
    res.json(post);
}

const getPost =  async (req, res) => {
    res.send('get post by id' + req.params.id);
}

const createPost =  async (req, res) => {
    res.send(req.body);
}

const updatePost =  async (req, res) => {
    res.send(req.body);
}

const deletePost =  async (req, res) => {
    res.send(req.params.id);
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost, 
    deletePost
}