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

router.patch('/:id',
validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
AcademicSemesterController.updateSemester)




router.get('/id', AcademicSemesterController.getSingleSemster)

router.delete('/:id', AcademicSemesterController.deleteSemester)






export const AcademicSemesterRoutes = router;

