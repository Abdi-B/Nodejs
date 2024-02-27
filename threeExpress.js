const express = require('express')
const mongoose = require('mongoose')


const app = express()
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/blog_app')
.then(() => console.log("mongoose connected"))
.catch((err) =>  console.log(err) )

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    } 
})

// to create Blog Table
const Blog = mongoose.model('Blog', blogSchema)


app.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.send({blogs})
    } catch (error) {
        // res.send({error: true, message: "error occurred on get"})
        res.status(500).send({error: true, message: "error occurred on get"})
    }
});

app.post('/blog', async (req, res) => {
    // create blog
    try {
        await Blog.create(req.body);
        res.send({success: true, message: "blog created"})
    } catch (error) {
        res.send({error: true, message: "error occurred on post"})
        
    }
  });

app.listen(3003, () => {
  console.log("server is listening at 3003")
});