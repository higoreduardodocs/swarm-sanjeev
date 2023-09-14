const bcrypt = require('bcrypt')

const UserModel = require('../models/user.model')

exports.signUp = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await UserModel.create({ username, password: hashedPassword })
    res.status(201).json({
      status: 'success',
      data: { user },
    })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}

exports.signIn = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ username: req.body.username })
    if (!user)
      return res.status(404).json({ status: 'fail', message: 'Usuário não cadastrado' })
    if (!await bcrypt.compare(req.body.password, user.password))
      return res.status(400).json({ status: 'fail', message: 'Credenciais incorretas' })

    res.status(200).json({
      status: 'success',
      data: { user },
    })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}