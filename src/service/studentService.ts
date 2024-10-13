import { IStudent, studentModel } from "../models/studentsModel";
import newStudentDto from "../types/dto/newStudentDto";
import bcrypt from 'bcrypt'

export const  createNewStudent = async (newStudent: newStudentDto): Promise<void> => {
    try {
        const { student_name, student_email, student_password, class_id } =
          newStudent;
          const hashedPassword = await bcrypt.hash(student_password, 10);
        const myStudent: IStudent = new studentModel({
          student_name,
          student_email,
          student_password:hashedPassword,
          class_id
        });
        await myStudent.save()
        
    } catch (err) {
        console.log(err);
        throw err
    }
};
