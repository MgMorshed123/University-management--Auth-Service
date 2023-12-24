
import { NextFunction, Request, RequestHandler, Response } from 'express';  
import { UserService } from './user.service';
import { createUserZodSchema } from './user.validation';
import catchAsync from '../../shared/catchAsync';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';


const createUser  = catchAsync(

  async (req: Request, res: Response , next : NextFunction) => {


    
    await  createUserZodSchema.parseAsync(req)

   const { user } = req.body;

   if (!user) {
     return res.status(400).json({
       success: false,
       message: 'User data is required',
     });
   }

   const result = await UserService.createUser(user);

  //  res.status(200).json({
  //    success: true,
  //    message: 'Created user successfully',
  //    data: result,
  //  });

  sendResponse(res, {

    statusCode : httpStatus.OK,
    success : true,
    message : 'User created Succefully',

    data: result,
  })


 }

)
  
  


export  const UserController  = {

    createUser

}