const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
app.set("views", path.join(__dirname, '/views'))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
let posts_data  = [
    { id: 1, title: "First Post", content: "This is the content of the first post." },
    { id: 2, title: "Second Post", content: "Learning JavaScript arrays and objects." },
    { id: 3, title: "Third Post", content: "Frontend development is interesting." },
    { id: 4, title: "Fourth Post", content: "React makes UI development easier." },
    { id: 5, title: "Fifth Post", content: "Practicing coding daily improves skills." },
    { id: 6, title: "Sixth Post", content: "Understanding async and await in JS." },
    { id: 7, title: "Seventh Post", content: "MongoDB is a NoSQL database." },
    { id: 8, title: "Eighth Post", content: "APIs connect frontend and backend." },
    { id: 9, title: "Ninth Post", content: "Debugging is an important skill." },
    { id: 10, title: "Tenth Post", content: "Consistency is the key to success." }
];







app.listen(port, () => {
    console.log("the port is listening at ", port);

})

app.get("/", (req, res) => {

    res.render("home")
})
app.get("/posts/new", (req, res) => {

    res.render("adding_post")
})
app.get("/posts", (req, res) => {
    res.render('posts', { posts: posts_data })
})


app.post("/posts/new" , (req , res )=>{
    posts_data.push(req.body)
    console.log("post received")
   
    console.log(req.body)
})

app.get("/posts/show/:id" , (req , res ) =>{
    let {id }= req.params
    let post = posts_data.find((p)=> p.id ==id)
    console.log(id)
    if(post){
    res.render('show_post' , {post})
    }
    
})