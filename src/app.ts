// app.js
import express, { Application, Request, Response } from 'express'

// Import required modules
// const express = require('express')
import cors from 'cors'

const app: Application = express()

app.use(cors())

// Define a route VVV
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express!')
})

export default app
