import httpStatus from 'http-status';
import { IAcademicSemester, IAcademicSemesterFilters } from './academicSemster.interface';
import { academicSemesterTitleCodeMapper, academisSemesterSearchableFields } from './academic.Semster.constant';
import ApiError from '../../../errors/ApiErrors';
import { AcademicSmester } from './academicSemsterModel';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IGenericrResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/PaginationHelpers';
import { SortOrder } from "mongoose";



const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {

  
  if (  payload.title && payload.code &&      academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Code');
  }

  const result = await AcademicSmester.create(payload);
  return result;
};


 


const getAllSemester = async (
  
  filters :IAcademicSemesterFilters,
  paginationOption: IPaginationOptions): Promise<IGenericrResponse<IAcademicSemester[]>> => {

   const {searchTerm, ...filtersData} = filters;



  const andConditions = []


   if(searchTerm) {

    andConditions.push({

      $or : academisSemesterSearchableFields.map((field) => ({
        [field] : {
          $regex : searchTerm,
          $option : 'i',
        }
      }))

    })


   }




   if(Object.keys(filtersData).length){
    andConditions.push({
      $and :Object.entries(filtersData).map(([field, value]) =>({
        [field] : value
      }))
    })
   }





  //  const andConditions = [

  //   {
  //     $or : [
  //       {
  //         title : {
  //           $regex : searchTerm,
  //           $option : 'i',
  //         },
  //       },

  //       {
  //         code : {
  //           $regex : searchTerm,
  //           $option : 'i',
  //         }
  //       },
  //       {
  //         year : {
  //           $regex : searchTerm,
  //           $option : 'i',
  //         }
  //       },


  //     ]
  //   }
  //  ]












    const {  page,  limit,  skip , sortBy, sortOrder  }  = paginationHelpers.calculatePagination(paginationOption)

     const sortConditions  : { [key : string] :SortOrder}  = {}


     if(sortBy && sortOrder) {
      sortConditions[sortBy]= sortOrder;
     }


     const whereConditions = andConditions.length > 0 ?   { $and : andConditions} : { };




    const result = await AcademicSmester.find({$and : andConditions}).sort({ year : 'asc'  }).skip(skip).limit(limit);

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



  const getSingleSemester = async (id : string) : Promise<IAcademicSemester | null >  => {

     const result = await AcademicSmester.findById(id);
     return result;
  }




  const updateSemester = async (

    id :string,
    payload : Partial<IAcademicSemester>
  ) : Promise <IAcademicSemester | null > => {

    const result =  await AcademicSmester.findOneAndUpdate({_id : id})


    return result;
  
  }

const deleteSemester = async (
  id : string
) :Promise <IAcademicSemester | null > => {

  const result = await AcademicSmester.findByIdAndDelete(id);

   return result;
}


export const AcademicSemesterService = {
  createSemester,
  getAllSemester,
  getSingleSemester,
  updateSemester,
  deleteSemester
};