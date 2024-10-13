import { ITeacher, teacherModel } from "../models/teachersModels";
import newTeacherDto from "../types/dto/newTeacherDto";
import bcrypt from 'bcrypt'

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
        console.log("lll");
        
    } catch (err) {
        console.log(err);
        throw err
    }
};
