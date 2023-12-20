



import { NextFunction, Request, RequestHandler, Response } from 'express';  
import { createUserZodSchema } from '../app/modules/user/user.validation';
import { UserService } from '../app/modules/user/user.service';
import { AnyZodObject, Schema } from 'zod';

const validateRequest = (schema : AnyZodObject)  => async (req: Request, res: Response , next : NextFunction) : Promise<void> => {

  try {
    

    await schema.parseAsync({
      body : req.body,
      query : req.query,
      params : req.params,
      cookies : req.cookies,
    })
   return next()

  } catch (error) {
    
    next(error)
    
  }
};
  


  export default validateRequest;
