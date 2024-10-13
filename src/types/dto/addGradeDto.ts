import mongoose from "mongoose"


export default interface newGradeDto  {
    classId:mongoose.Schema.Types.ObjectId,
    studentId:mongoose.Schema.Types.ObjectId,
    garde:number
  }
  