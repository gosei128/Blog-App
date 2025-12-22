const express = require('express')
const router = express.Router()
 const {blog_home, blog_details, blog_create_post, blog_delete} = require('../controller/blogController')

router.get('/', blog_home)

router.get('/:id', blog_details)

router.post('/', blog_create_post)

router.delete('/:id', blog_delete) 
module.exports = router