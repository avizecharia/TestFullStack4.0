import { IStudent } from "../models/studentsModel";
import { ITeacher, teacherModel } from "../models/teachersModels";
import newGradeDto from "../types/dto/addGradeDto";
import newTeacherDto from "../types/dto/newTeacherDto";
import bcrypt from 'bcrypt'
import { getClassById } from "./studentService";

export const  createNewTeacher = async (newTeacher: newTeacherDto): Promise<void> => {
    try {
        const { teacher_name, teacher_email, teacher_password, class_name } =
          newTeacher;
          const hashedPassword = await bcrypt.hash(teacher_password, 10);
        const myTeacher: ITeacher = new teacherModel({
          teacher_name,
          teacher_email,
          teacher_password:hashedPassword,
          class_name
        });
        await myTeacher.save()
        
    } catch (err) {
        console.log(err);
        throw err
    }
};
export const getAllStudentService = async (classId:string):Promise<IStudent | unknown> => {
 const myClass:IStudent | unknown = await teacherModel.findById(classId).populate("students")
 if(!myClass){
    throw new Error("threre is no class by this id");
 }
 //@ts-ignore
 return myClass.students
}

export const addGradeToStident = async (newGrade :newGradeDto):Promise<void> => {
   const {classId , studentId, garde} = newGrade
    const myClass : ITeacher | unknown = await getClassById(classId.toString())
    if(!myClass){
        throw new Error("did not find class by thid id");
    }
}


