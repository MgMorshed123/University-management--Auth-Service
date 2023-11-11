import userService from "./user.service"
import { Request, Response } from 'express';  


const createUser = async (req: Request, res: Response) => {
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
      console.error('Error creating user:', err);
      res.status(500).json({
        success: false,
        message: 'Failed to create user',
        // error: err.message, // Add the error message to the response for better debugging
      });
    }
  };
  


export default {

    createUser

}