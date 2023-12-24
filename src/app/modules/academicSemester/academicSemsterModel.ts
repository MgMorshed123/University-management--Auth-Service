import { Model, Schema, model } from 'mongoose';
import { IAcademicSemester, IAcademicSemesterTitles, IAcademicSemesterMonths, AcademicSemesterModel } from './academicSemster.interface';
import { academicSemesterCodes, academicSemesterTitleCodeMapper, academicSemesterTitles, acdemicSemesterMonths } from './academic.Semster.constant';
import ApiError from '../../../errors/ApiErrors';
import status from 'http-status'






const academicSemesterSchema = new Schema<IAcademicSemester>(
    {
      title: {
        type: String,
        required: true,
        enum: academicSemesterTitles,
      },
      year: {
        type: Number,
        required: true,
      },
      code: {
        type: String,
        required: true,
        enum: academicSemesterCodes,
      },
      startMonth: {
        type: String,
        required: true,
        enum: acdemicSemesterMonths,
      },
      endMonth: {
        type: String,
        required: true,
        enum: acdemicSemesterMonths,
      },
    },
    {
      timestamps: true,
    }
  );

  
//  CHECK FOR SAME YEAR SAME SEMESTER 

academicSemesterSchema.pre('save', async function(next){
      const isExist = await AcademicSmester.findOne ({ title : this.title, year : this.year }) 
      if(isExist){
      throw new ApiError(status.CONFLICT, "Academic Semster Already  Exist ")
      }
      next()
})






 export const AcademicSmester = model<IAcademicSemester, AcademicSemesterModel>('AcademicSmester', academicSemesterSchema);















