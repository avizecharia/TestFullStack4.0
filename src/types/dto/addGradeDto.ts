import mongoose from "mongoose"


export default interface newGradeDto  {
    carrier:string,
    classId:mongoose.Schema.Types.ObjectId,
    grade:number
  }
  