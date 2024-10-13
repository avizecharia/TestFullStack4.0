import { Request, Response } from "express";
import { createNewStudent } from "../service/studentService";

export const registerStudent = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await createNewStudent(req.body)
    res.sendStatus(200).json({
        result
    })
  } catch (err) {}
};
export const Logout = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (err) {}
};
