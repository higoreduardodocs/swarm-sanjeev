const PostModel = require('../models/post.model')

exports.findAll = async (req, res, next) => {
  try {
    const posts = await PostModel.find({})
    res.status(201).json({
      status: 'success',
      results: posts.length,
      data: { posts },
    })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}

exports.findById = async (req, res, next) => {
  try {
    const post = await PostModel.findById(req.params.id)
    res.status(200).json({
      status: 'success',
      data: { post },
    })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}

exports.save = async (req, res, next) => {
  try {
    const post = await PostModel.create(req.body)
    res.status(200).json({
      status: 'success',
      data: { post },
    })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}

exports.update = async (req, res, next) => {
  try {
    const post = await PostModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
    res.status(200).json({
      status: 'success',
      data: { post },
    })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}

exports.remove = async (req, res, next) => {
  try {
    await PostModel.findByIdAndRemove(req.params.id)
    res.status(200).json({ status: 'success' })
  } catch (error) {
    res.status(500).json({ status: 'fail' })
  }
}