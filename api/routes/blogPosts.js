const express = require("express");
const router = express.Router();
const blogModel = require('../models/blogModel')

//Getting all
router.get("/", async (req, res) => {
  try{
    const blogs = await blogModel.find({}, {__v:0})
    res.send(blogs)
  }
  catch (err) {
    res.status(500).json({message: err.message})
  }

  //res.send("Get all routes")
});

//Getting by id
router.get("/:id", getBlog, (req, res) => {
  res.send(res.blog.title)
});

async function getBlog(req, res, next){
  try{
    blog = await blogModel.findById(req.params.id)
    if(blog == null)
    return res.status(404).json({message : "Cannot find blog"})
  }
  catch(err){
    return res.status(500).json({message: err.message})
  }

  res.blog = blog
  next();
}

module.exports = router;
