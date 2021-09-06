const express = require("express");
const router = express.Router();
const blogModel = require('../models/blogModel')

//Getting all
router.get("/api/blog", async (req, res) => {
  try{
    const blogs = await blogModel.find()
    res.json(blogs)
  }
  catch (err) {
    res.status(500).json({message: err.message})
  }
});

//Getting by id
router.get("/api/blog/:id", async (req, res) => {
  try{
    blog = await blogModel.findById(req.params.id)
    if(blog == null)
    return res.status(404).json({message : "Cannot find blog"})
    res.json(blog)
  }
  catch(err){
    return res.status(500).json({message: err.message})
  }
});



module.exports = router;
