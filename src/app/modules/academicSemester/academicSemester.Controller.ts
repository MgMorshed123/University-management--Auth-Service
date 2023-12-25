import { RequestHandler } from 'express-serve-static-core';
import { AcademicSemesterService } from './academicSemster.service';
import catchAsync from '../../shared/catchAsync';
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../shared/pick';
import { paginationOptions } from '../../../constant/pagination';

const createSemester= catchAsync(

  async (req: Request, res : Response, next : NextFunction ) => {

    
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );


    // res.status(200).json({
    //   success: true,
    //   message: 'Academic semester is created successfully!',
    //   data: result,
    // });

    sendResponse(res, {

      statusCode : httpStatus.OK,
      success : true,
      message : 'Academic Semster  created Succefully',
      data: result,
    })

      next()

  }


)





const  getAllSemster = catchAsync(

  async(req : Request, res : Response, next : NextFunction) => {

    // const paginationOptions = {
    //   page :Number(req.query.page),
    //   limit : Number(req.query.limit),
    //   sortBy :req.query.sortBy,
    //   sortOrder : req.query.sortOrder,
    // }

    const paginationOption= pick(req.query,paginationOptions )
 




  const result = await  AcademicSemesterService.getAllSemster(paginationOptions)

  })



  sendResponse(res, {

    statusCode : httpStatus.OK,
    success : true,
    message : 'Academic Semster  created Succefully',
    data: result,
  })




export const AcademicSemesterController = {
  createSemester,
  getAllSemster
};