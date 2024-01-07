import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemster.interface';
import { academicSemesterTitleCodeMapper } from './academic.Semster.constant';
import ApiError from '../../../errors/ApiErrors';
import { AcademicSmester } from './academicSemsterModel';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericrResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/PaginationHelpers';
import { SortOrder } from "mongoose";
const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {

  
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Code');
  }

  const result = await AcademicSmester.create(payload);
  return result;
};


 



const getAllSemester = async (paginationOption: IPaginationOptions): Promise<IGenericrResponse<IAcademicSemester[]>> => {



    const {  page,  limit,  skip , sortBy, sortOrder  }  = paginationHelpers.calculatePagination(paginationOption)


     const sortConditions  : { [key : string] :SortOrder}  = { }


     if(sortBy && sortOrder) {
      sortConditions[sortBy]= sortOrder;
     }



    const result = await AcademicSmester.find().sort({ year : 'asc'  }).skip(skip).limit(limit);

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