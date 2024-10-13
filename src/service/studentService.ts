import { IStudent, studentModel } from "../models/studentsModel";
import { ITeacher, teacherModel } from "../models/teachersModels";
import newStudentDto from "../types/dto/newStudentDto";
import bcrypt from 'bcrypt'

export const  createNewStudent = async (newStudent: newStudentDto): Promise<void> => {
    try {
        const { student_name, student_email, student_password, class_id } =
          newStudent;
            const myClass:ITeacher | unknown = await getClassById(class_id.toString())
        if(!myClass){
            throw new Error("did not find class by thid id");
        }
        const hashedPassword = await bcrypt.hash(student_password, 10);
        const myStudent: IStudent = new studentModel({
          student_name,
          student_email,
          student_password:hashedPassword,
          class_id
        });
        await myStudent.save()
        await teacherModel.findByIdAndUpdate(class_id,{$push:{students:myStudent.id}})
        
    } catch (err) {
        console.log(err);
        throw err
    }
};

export const getClassById = async (id:string) :Promise<ITeacher | unknown> => {
    return await teacherModel.findById(id)
}