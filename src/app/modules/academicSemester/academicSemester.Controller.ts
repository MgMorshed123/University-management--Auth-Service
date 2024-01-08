import { RequestHandler } from 'express-serve-static-core';
import { AcademicSemesterService } from './academicSemster.service';
import catchAsync from '../../shared/catchAsync';
import { Request, Response, NextFunction } from 'express';
import sendResponse, { IApiResponse } from '../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../shared/pick';
import { paginationOptions } from '../../../constant/pagination';
import { IAcademicSemester } from './academicSemster.interface';
import { academisSemesterFilterableFields } from './academic.Semster.constant';

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


    sendResponse<IAcademicSemester[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  });






const  getAllSemster = catchAsync(

  async(req : Request, res : Response, next : NextFunction) => {

   const filters = pick(req.query, academisSemesterFilterableFields)

  const paginationOption= pick(req.query, paginationOptions )
 

   const result = await  AcademicSemesterService.getAllSemester(paginationOption, filters)

  sendResponse<IAcademicSemester[]> (res, {
    statusCode : httpStatus.OK,
    success : true,
    message : 'Academic Semster  created Succefully',
    meta : result.meta,
    data: result.data,
  })
  })




  const getSingleSemster = catchAsync(

    async(req : Request, res :Response , next: NextFunction) => {

      const id = req.params.id;

      const result = await AcademicSemesterService.getSingleSemester(id)


      sendResponse<IAcademicSemester[]>(res, {
        statusCode : httpStatus.OK,
        success: true,
        message : 'Semester  Retrieved SuccessFully',
        meta: result.meta,
        data: result.data,
  
      })
     next();
    }
    
    );
      




const updateSemester = catchAsync(

  async(req : Request, res :Response , next: NextFunction) => {

    const id = req.params.id;

    const result = await AcademicSemesterService.getSingleSemester(id)


    sendResponse<IAcademicSemester[]>(res, {
      statusCode : httpStatus.OK,
      success: true,
      message : 'Semester  Retrieved SuccessFully',
      data: result,

    })
   next();
  }

)

  


export const AcademicSemesterController = {
  createSemester,
  getAllSemster,
  getSingleSemster,
  updateSemester
};