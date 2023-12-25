import express from 'express';
import { AcademicSemesterValidation } from './academicSemester.Validation';
import validateRequest from '../../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.Controller';


// import { UserController } from './user.controller';
// import { AcademicSemesterController } from './academicSemester.controller';
// import { AcademicSemesterValidation } from './acdemicSemester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);



router.get('/', AcademicSemesterController.getAllSemster)





export const AcademicSemesterRoutes = router;