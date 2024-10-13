import { Request, Response } from "express";
import { createNewTeacher, getAllStudentService } from "../service/teacherService";
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

export const addStudentGradeService = async (req: Request, res: Response): Promise<void> => {
    try {
      
      res.status(200).json({
          allStudent
      })
    } catch (err) {
        res.json({
            err
        })
    }
  };
  
  