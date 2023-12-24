import { NextFunction } from "express"


const catchAsync = fn => {

    return async (req : Request, res : Response, next : NextFunction) => {


        try {

            fn(req,res,next)
            
        } catch (error) {
            
        }


    }




}

export default catchAsync;