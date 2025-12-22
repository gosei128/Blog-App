const Blog = require('../models/UserSchema.js')
const mongoose = require('mongoose')
const blog_home = async (req, res)=>{ 
    const blogs = await Blog.find({}).sort({createdAt : -1})
    res.status(200).json(blogs)
}

const blog_details = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Invalid ID"})
    }

    const blog = await Blog.findById(id)

    if(!blog){
        return res.status(404).json({   error : "No Blog"})                             
    }

    res.status(200).json(blog)
}  


const blog_create_post = async (req, res)=>{
    const {title, body, author} = req.body
    try{
        const blogs = await Blog.create({title, body, author})

        res.status(200).json(blogs)
    }catch(e){
        console.log(e.message)
    }
 }

const blog_delete = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error : "Invalid ID"})
    }

    const blog = await Blog.findOneAndDelete({_id: id})

    if(!blog){
        return res.status(404).json({   error : "No Blog"})                             
    }

    res.status(200).json(blog)

}



module.exports = {blog_home, blog_details, blog_create_post, blog_delete }