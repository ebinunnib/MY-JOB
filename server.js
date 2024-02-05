// packeges import
// const express=require('express')
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'
//files import
import DBconnection from './config/db.js'

import router from './routes/router.js'
import authRouter from './routes/authRouter.js'
import errormiddleware from './middlewares/errorMiddleare.js'

//dotenv config
dotenv.config()
//rest object
const app=express()
DBconnection()

//middleware
app.use(express.json());
app.use(cors())
app.use(morgan('dev'))


//routes
app.use(router);
app.use(authRouter)


//validation middleware
app.use(errormiddleware)

const PORT=process.env.PORT ||8080
//listen

app.listen(8080,()=>{
    console.log(`......node server running ${process.env.DEV_MODE} on port ${PORT}.....`.yellow);
})