const express = require('express');
const router = express.Router();
const {getPosts, getPost, createPost, updatePost, deletePost} = require('../controllers/post');

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router