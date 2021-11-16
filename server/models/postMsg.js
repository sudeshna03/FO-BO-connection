import mongoose from 'mongoose';

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = Schema({
//   name: String,
//   reg: String
// });

const postSchema = mongoose.Schema({
  name: String,
  reg: String
});
const postsch = mongoose.model('postsch', postSchema);

export default postsch;
