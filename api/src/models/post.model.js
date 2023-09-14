const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Título obrigatório'],
  },
  body: {
    type: String,
    required: [true, 'Post obrigatório'],
  },
})

const Post = mongoose.model('Post', PostSchema)
module.exports = Post
