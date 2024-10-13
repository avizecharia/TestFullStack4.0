import { Router } from "express";
import { registerTeacher,getAllStudent } from "../controllers/teacherController";


const router = Router();


router.post('/register', registerTeacher)
router.post('/addGrade', addStudentGrade)
// router.put('/updateGrade', updateStudentGrade)
router.get('/getAllStudent', getAllStudent)
// router.get('getAvrageGrades', getAvrageGrade)
// router.get('getstudentGrade', getstudentGrade)




export default router;
