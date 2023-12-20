import { Model, Schema, model } from 'mongoose';
import { IAcademicSemester, IAcademicSemesterTitles, IAcademicSemesterMonths, AcademicSemesterModel } from './academicSemster.interface';







const academicSemesterSchema = new Schema<IAcademicSemester>(
    {
      title: {
        type: String,
        required: true,
        enum: IAcademicSemesterTitles,
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
        enum: IAcademicSemesterMonths,
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
 export const AcademicSmester = model<IAcademicSemester, AcademicSemesterModel>('AcademicSmester', academicSemesterSchema);