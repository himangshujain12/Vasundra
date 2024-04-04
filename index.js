const express=require('express')
const env=require('dotenv').config({path:'.env.js'})
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const jwt =require('jsonwebtoken')
const app=express()
const PORT=process.env.PORT|| 5000

app.use(bodyParser.json())
require('./src/connections/mongoDb')


const router=require('./src/routes/main')
app.use('/user',router)

app.listen(PORT,()=>{
    console.log("Server Running on Port :",PORT);
})




