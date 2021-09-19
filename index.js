const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const postRoute = require('./routes/post');
const commentRoute = require('./routes/comment');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
}).then(console.log('connected to MongoDB'))
.catch((err) => console.log(err));

app.use('/api/post', postRoute);
app.use('/api/post/c', commentRoute);

app.listen("5000", () => {
    console.log("Api is running");
});