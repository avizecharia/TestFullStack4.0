import mongoose from "mongoose";

export default interface newStudentDto  {
    student_name: string;
    student_password: string;
    student_email:string;
    class_id:mongoose.Schema.Types.ObjectId
  }
  