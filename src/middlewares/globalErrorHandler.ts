
import express, { Application, NextFunction, Request, Response, request, response } from 'express'
import config from '../config';
import { IGenericErrorMessage } from '../interfaces/error';
import handleValidationError from '../errors/handleVlidationError';


  const globalErrorHandler = (err,
    req : Request , 
    res :Response, 
    next  : NextFunction) => {



        let statusCode = 500;
        let message = 'message went wrong'
        let errorMessages : IGenericErrorMessage[] = []


         if(err.name ="ValidatorError") {

          const simplifiedError = handleValidationError(err)



         }




      res.status(statusCode).json({ 
        success :false,
        message,
        errorMessages,
        stack : config.env !== 'production' ? err.stack : undefined

      });
     

  }

  export  default globalErrorHandler;
