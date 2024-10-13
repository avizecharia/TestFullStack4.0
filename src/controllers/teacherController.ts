import { Request, Response } from "express";
import { addGradeToStudentService, createNewTeacher, getAllStudentService, getAvargeGradesService, updateGradeStudentService } from "../service/teacherService";
import { IStudent } from "../models/studentsModel";

export const registerTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await createNewTeacher(req.body)
    res.sendStatus(200).json({
        result
    })
  } catch (err) {
    res.json({
        err
    })
  }
};
export const getAllStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const allStudent :IStudent[]| unknown= await getAllStudentService(req.body.id)
    res.status(200).json({
        allStudent
    })
  } catch (err) {
    res.json({
        err
    })
  }
};

export const addStudentGrade = async (req: Request<any,any,any>, res: Response): Promise<void> => {
    try {
      const result:IStudent | unknown = await addGradeToStudentService(req.params.id,req.body)
      res.status(200).json({
          result
      })
    } catch (err) {
        res.json({
            err
        })
    }
  };
  
  
export const updateStudentGrade = async (req: Request<any,any,any>, res: Response): Promise<void> => {
    try {
      const result:IStudent | unknown = await updateGradeStudentService(req.params.id,req.body)
      res.status(200).json({
          result
      })
    } catch (err) {
        res.json({
            err
        })
    }
  };

  export const getAvrageGrade = async (req: Request<any,any,any>, res: Response): Promise<void> => {
    try {
      const result:IStudent | unknown = await getAvargeGradesService(req.params.id)
      res.status(200).json({
        //   result
      })
    } catch (err) {
        res.json({
            err
        })
    }
  };
  
  
  