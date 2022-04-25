const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

app.use('/user', userRouter);
app.use('/posts', postRouter);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})