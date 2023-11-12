  
  import { Request, Response, NextFunction } from "express";
  
  
   export  const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
 
    next()
  };