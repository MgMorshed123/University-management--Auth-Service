
import express from "express";
import { UserRoutes } from "../user/user.route";
import { AcademicSemesterRoutes } from "../academicSemester/academicSesmster.Route";

const router = express.Router();



const modulRoutes = [

    {
        path : '/users',
        route : UserRoutes,

    },

    {
        path: '/academic-semesters',
        route: AcademicSemesterRoutes,
    }
]


modulRoutes.forEach((route) =>  router.use(route.path, route.route))



// router.use('/users/', UserRoutes)
// router.use('/create-semsters', AcademicSemesterRoutes)




export default router;

