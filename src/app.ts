// app.js
import express, { Application, } from 'express'
import userRouter from  './app/modules/user/user.route'

// Import required modules
// const express = require('express')
import cors from 'cors'
import { globalErrorHandler } from './app/middlewares/globalErrorHanldler';

const app: Application = express()
app.use(express.json());
app.use(cors())

// Define a route VVV



app.use("/api/v1/users/",userRouter)




// testing 

// app.get('/',  async (req: Request, res: Response , next :NextFunction) => {
//   throw new Error("Ore bBaba error")

//   next(" Ore  Errorrrrrr")
// })


// global error hanlder 

app.use(globalErrorHandler);





export default app
