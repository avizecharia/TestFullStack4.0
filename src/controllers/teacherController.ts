import { Request, Response } from "express";
import { createNewTeacher } from "../service/teacherService";

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await createNewTeacher(req.body)
    res.sendStatus(200).json({
        result
    })
  } catch (err) {}
};
export const Logout = async (req: Request, res: Response): Promise<void> => {
  try {
  } catch (err) {}
};
