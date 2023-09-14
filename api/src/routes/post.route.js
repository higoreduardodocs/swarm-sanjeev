const express = require('express')

const postController = require('../controllers/post.controller')

const router = express.Router()

router.route('/')
  .post(postController.save)
  .get(postController.findAll)

router.route('/:id')
  .patch(postController.update)
  .get(postController.findById)
  .delete(postController.remove)

module.exports = router