const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Usuário obrigatório'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Senha obrigatório'],
  },
})

const User = mongoose.model('User', UserSchema)
module.exports = User
