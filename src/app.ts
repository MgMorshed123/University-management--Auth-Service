// app.js
import express, { Application, Request, Response } from 'express'
import userRouter from  './app/modules/user/user.route'

// Import required modules
// const express = require('express')
import cors from 'cors'

const app: Application = express()
app.use(express.json());
app.use(cors())

// Define a route VVV
app.get('/',  async (req: Request, res: Response) => {
  res.send('Hello, Express!')
})


app.use("/api/v1/users/",userRouter)

export default app
