const express=require('express')

const app=express()
app.use(express.json())

const RouterBlog=require('./routes/blog')
const RouterAuth=require('./routes/auth')
const RouterCategories=require('./routes/category')

app.use('/blog',RouterBlog)
app.use('/auth',RouterAuth)
app.use('/category',RouterCategories)

app.listen(3000,'0.0.0.0',()=>{
    console.log(`server started on port 3000`)
})