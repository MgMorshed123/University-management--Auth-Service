import httpStatus from 'http-status';
import { IAcademicSemester } from './academicSemster.interface';
import { academicSemesterTitleCodeMapper } from './academic.Semster.constant';
import ApiError from '../../../errors/ApiErrors';
import { AcademicSmester } from './academicSemsterModel';
import { IPaginationOptions } from '../../../interfaces/pagination';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {

  
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Code');
  }

  const result = await AcademicSmester.create(payload);
  return result;
};





const getAllSemster = (paginationOptions :IPaginationOptions ) => {



}



export const AcademicSemesterService = {
  createSemester,
  getAllSemster
};