import { IGrade, IStudent, studentModel } from "../models/studentsModel";
import { ITeacher, teacherModel } from "../models/teachersModels";
import newGradeDto from "../types/dto/addGradeDto";
import newTeacherDto from "../types/dto/newTeacherDto";
import bcrypt from "bcrypt";
import { getClassById } from "./studentService";
import updateGradeDto from "../types/dto/updateGradeDto";
import mongoose from "mongoose";

export const createNewTeacher = async (
  newTeacher: newTeacherDto
): Promise<void> => {
  try {
    const { teacher_name, teacher_email, teacher_password, class_name } =
      newTeacher;
    const hashedPassword = await bcrypt.hash(teacher_password, 10);
    const myTeacher: ITeacher = new teacherModel({
      teacher_name,
      teacher_email,
      teacher_password: hashedPassword,
      class_name,
    });
    await myTeacher.save();
  } catch (err) {
    console.log(err);
    throw err;
  }
};
export const getAllStudentService = async (
  classId: string
): Promise<IStudent | unknown> => {
  const myClass: IStudent | unknown = await teacherModel
    .findById(classId)
    .populate("students");
  if (!myClass) {
    throw new Error("threre is no class by this id");
  }
  //@ts-ignore
  return myClass.students;
};

export const addGradeToStudentService = async (
  studentId: string,
  newStudentGrade: newGradeDto
): Promise<IStudent | unknown> => {
  const { classId, grade, carrier } = newStudentGrade;
  const myClass: ITeacher | unknown = await getClassById(classId.toString());
  if (!myClass) {
    throw new Error("did not find class by thid id");
  }
  const myStudent: IStudent | unknown = await getStudentById(
    studentId.toString()
  );
  if (!myStudent) {
    throw new Error("did not find student by thid id");
  }
  await studentModel.findByIdAndUpdate(studentId, {
    $push: { gardes: newStudentGrade },
  });
  return await getStudentById(studentId);
};

export const updateGradeStudentService = async (
  studentId: string,
  updateGradeUpdate: updateGradeDto
): Promise<void> => {
    try {
        const { classId, gradeId,grade } = updateGradeUpdate;
        const myClass: ITeacher | unknown = await getClassById(classId.toString());
        if (!myClass) {
          throw new Error("did not find class by thid id");
        }
        const myStudent: IStudent | unknown = await studentModel.findById(studentId);
        if (!myStudent) {
          throw new Error("did not find student by thid id");
        }
        console.log(updateGradeUpdate);
      
        // await studentModel.findByIdAndUpdate(studentId , {$push:{gardes:newStudentGrade}})
        await studentModel.updateOne(
          {gardes :  gradeId} ,
          { $set: { grade : grade }}
       )
        
    } catch (error) {
        console.log(error);
        
    }
  // return await getStudentById(studentId)
};

export const getStudentById = async (
  studentId: string
): Promise<IStudent | unknown> => {
  return await studentModel.findById(studentId);
};

export const getAvargeGradesService = async (teacherId:string) :Promise<void> => {
 const allStudent = await studentModel.aggregate([
    {$match : {
        class_id : new mongoose.Types.ObjectId(teacherId)
     } },
    {
      '$project': {
        'gardes': 1, 
        '_id': 0
      }
    }, {
      '$unwind': {
        'path': '$gardes'
      }
    }, {
      '$project': {
        'grade': '$gardes.grade'
      }
    }, {
      '$group': {
        '_id': null, 
        'avgGrade': {
          '$avg': '$grade'
        }
      }
    }
  ])
  return allStudent[0].avgGrade
}