
import express, { Application, NextFunction, Request, Response, request, response } from 'express'


  const globalErrorHandler = (err,
    req : Request , 
    res :Response, 
    next  : NextFunction) => {

      res.status(400).json({ errr: err});
      // Use err.message to get the error message
      next()

  }

  export  default globalErrorHandler;
