
const User = require('../models/user');
const login = async (req, res) => {
    res.send('login');
}

const register = async (req, res) => {
    res.send('register');
}

const logout = async (req, res) => {
    res.send('logout');
}

module.exports = {
    login,
    register,
    logout
}