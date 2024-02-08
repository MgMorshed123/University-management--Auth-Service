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

  async (req: Request, res : Response,  ) => {

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
   
  });






const  getAllSemster = catchAsync(

  async(req : Request, res : Response, ) => {

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

    async(req : Request, res :Response ) => {

      const id = req.params.id;

      const result = await AcademicSemesterService.getSingleSemester(id)


      sendResponse<IAcademicSemester[]>(res, {
        statusCode : httpStatus.OK,
        success: true,
        message : 'Semester  Retrieved SuccessFully',
        meta: result.meta,
        data: result.data,
  
      })
    
    }
    
    );
      




const updateSemester = catchAsync(

  async(req : Request, res :Response ) => {

    const id = req.params.id;
  const updateOne = req.body;

    const result = await AcademicSemesterService.updateSemester(id, updateOne)


    sendResponse<IAcademicSemester[]>(res, {
      statusCode : httpStatus.OK,
      success: true,
      message : 'Semester  Retrieved SuccessFully',
      data: result,

    })
  
  }

)

  const deleteSemester = catchAsync(


    async(req : Request, res :Response ) => {

      const id = req.params.id;
 
  
      const result = await AcademicSemesterService.deleteSemester(id)
  
      sendResponse<IAcademicSemester[]>(res, {
        statusCode : httpStatus.OK,
        success: true,
        message : 'Semester  Deleted SuccessFully',
        data: result,
  
      })
    }
  )


export const AcademicSemesterController = {
  createSemester,
  getAllSemster,
  getSingleSemster,
  updateSemester,
  deleteSemester
};