import express, { urlencoded } from "express"
import cors from "cors"
import dotenv from 'dotenv'

import connectDB from "./db/index.js"
import { saveTodos , getTodos , updateTodos ,deleteTodos } from "./controllers/TodoControllers.js"

dotenv.config({
    path:'./.env'
})

const app=express()

app.use(express.json())
app.use(cors())
app.use(urlencoded({extended:true}))

const port=process.env.PORT

connectDB()

app.get('/api',(req,res)=>{
    console.log("hiii")
    res.send("hello")
})

app.post('/api/save',saveTodos)
app.get('/api/get',getTodos)
app.put('/api/update/:id',updateTodos)
app.delete('/api/delete/:id',deleteTodos)

app.listen(port|5000,()=>{
    console.log(`Server started on port ${port}`)
})


/*

app.post('/api/save',async (req,res) => {
    const {item} = req.body 
    console.log(req.body)
    await TodoModel.create({item})
    .then(data => {
        console.log("Saved Successfully")
        res.status(201).send(data)
    })
    .catch((err)=> console.log(err))
})

app.get("/api/get", async (req,res) => {
    const todo = await TodoModel.find()
    res.send(todo)
})

*/
