const getPosts =  async (req, res) => {
    res.send('get posts');
}

const getPost =  async (req, res) => {
    res.send('get post by id' + req.params.id);
}

module.exports = {
    getPosts,
    getPost
}