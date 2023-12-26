import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemster.interface';
import { academicSemesterTitleCodeMapper } from './academic.Semster.constant';
import ApiError from '../../../errors/ApiErrors';
import { AcademicSmester } from './academicSemsterModel';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericrResponse } from '../../../interfaces/common';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {

  
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Code');
  }

  const result = await AcademicSmester.create(payload);
  return result;
};


 



const getAllSemester = async (paginationOptions: IPaginationOptions): Promise<IGenericrResponse<IAcademicSemester[]>> => {


    const { page = 1, limit = 10 } = paginationOptions;
    const skip = (page - 1) * limit;

    const result = await AcademicSmester.find().sort({ createdAt: 'asc'  }).skip(skip).limit(limit);


    const total = await AcademicSmester.countDocuments();

    // 3. Return the result
    return {
     
      meta: {
        page,
        limit,
        total,
      },
      data : result
    };
  } 




export const AcademicSemesterService = {
  createSemester,
  getAllSemester
};