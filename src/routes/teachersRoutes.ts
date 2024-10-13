import { Router } from "express";
import { registerTeacher,getAllStudent, addStudentGrade, updateStudentGrade, getAvrageGrade } from "../controllers/teacherController";


const router = Router();


router.post('/register', registerTeacher)
router.post('/addGrade/:id', addStudentGrade)
router.put('/updateGrade/:id', updateStudentGrade)
router.get('/getAllStudent', getAllStudent)
router.get('getAvrageGrades/:id', getAvrageGrade)
// router.get('getstudentGrade', getstudentGrade)




export default router;
