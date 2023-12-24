import { RequestHandler } from 'express-serve-static-core';
import { AcademicSemesterService } from './academicSemster.service';
import catchAsync from '../../shared/catchAsync';
import { Request, Response, NextFunction } from 'express';

const createSemester= catchAsync(

  async (req: Request, res : Response, next : NextFunction ) => {

    
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic semester is created successfully!',
      data: result,
    });
  }


)
export const AcademicSemesterController = {
  createSemester,
};