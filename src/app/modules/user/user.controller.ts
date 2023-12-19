import userService from "./user.service"
import { NextFunction, Request, Response } from 'express';  


const createUser = async (req: Request, res: Response , next : NextFunction) => {
    try {
      
      const { user } = req.body;
  
      if (!user) {
        return res.status(400).json({
          success: false,
          message: 'User data is required',
        });
      }
  
      const result = await userService.createUser(user);
  
      res.status(200).json({
        success: true,
        message: 'Created user successfully',
        data: result,
      });
    } catch (err) {
      
      next(err)
      
    }
  };
  


export default {

    createUser

}