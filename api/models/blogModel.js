const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('posts' ,blogSchema)