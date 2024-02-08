// app.js
import express, { Application, NextFunction, Request, Response, request, response } from 'express'

// Import required modules
// const express = require('express')
import cors from 'cors'
import { error } from 'winston';
import ApiError from './errors/ApiErrors';
import globalErrorHandler from './middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSesmster.Route';
import router from './app/modules/routes';
import httpStatus from 'http-status';
import { generateFacultyId } from './app/modules/user/user.utils';

const app: Application = express()
app.use(express.json());
app.use(cors())

// Define a route  
/* app.get('/',  async (req: Request, res: Response) => {

  res.send('Hello, Express!')

}) */


// app.use("/api/v1/users/",UserRoutes)
// app.use("/api/v1/create-semsters",AcademicSemesterRoutes)

app.use('/api/v1', router)


// handle noT Found 

app.use((req :Request,res : Response,next : NextFunction) => {

  res.status(httpStatus.NOT_FOUND).json({
    success : false,
    message : 'NOT FOUND ',
    errorMessages : [
      {
        path : req.originalUrl,
        message : 'API NOT FOUND',
      }
    ]
  })
  next()
})


const academicSemester =  {

  code : '01',
  year : '2025'
}
  
  const testId = () => {
    
    const testId = generateFacultyId()
    console.log(testId)
  }


  testId()



// custom error
  app.get("/", (req : Request , res :Response, next : NextFunction) => {
    throw new ApiError(400, 'ore baba error')
  })



  //  2 using it for global error handler 

/*   app.get("/", (req : Request , res :Response, next : NextFunction) => {
    next( 'ore baba error')
  })

  app.use((err, req : Request , res :Response, next  : NextFunction) => {
    if (err instanceof Error) {
      res.status(400).json({ error: err});
      // Use err.message to get the error message
    } else {
      res.status(500).json({ error: "Something went wrong" });
    }
  }); */
  

  app.use(globalErrorHandler)


export default app
