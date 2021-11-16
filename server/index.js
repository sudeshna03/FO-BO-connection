import express from 'express';
// // import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// const app = express();

// // app.use(bodyParser.json({ limit: '30mb', extended: true }));
// // app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(cors());

// // const CONNECTION_URL = 'mongodb+srv://sude:Qwsazx@123@cluster0.rggve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect('mongodb+srv://sude:Qwsazx@123@cluster0.rggve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
//   })
//   .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
//   .catch((error) => console.log(error));

// // mongoose.set('useFindAndModify', false);

// const express = require('express');
// const mongoose = require('mongoose');
// const router = require('./routes');
import router from './routers/posts.js';

const app = express();
const port = 8000;

mongoose
  .connect('mongodb+srv://Nikhila:nunRvhJB27i5DwyN@cluster0.tv95o.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then((res) => console.log(`Connection Succesful `))
  .catch((err) => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(cors());
app.use('/posts', router);

app.listen(port, () => {
  console.log(`Application is listening at port ${port}`);
});
