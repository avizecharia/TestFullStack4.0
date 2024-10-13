import mongoose, { Schema, Document, Types } from "mongoose";
import { isEmail } from "validator";
export interface IGrade {
  carrier: string;
  grade: number;
}

export interface IStudent extends Document {
  student_name?: string;
  student_email: string;
  class_id: Types.ObjectId;
  gardes: IGrade[];
}
const gardeSchema = new Schema<IGrade>({
  carrier:{
    type:String,
    required:[true,'carrier is missing!']
  },
  grade:{
    type:Number,
    required:[true,'grade is missing!'],
  }
},{timestamps:true});

const studentSchema = new Schema<IStudent>( {
    student_name:{
    type:String,
    required : [true,"you nissing student name"]
  },
  student_email:{
    type:String,
    required:[true, "student_email is missing"],
    validate: [ isEmail, 'invalid email' ],
    unique:true
  },
  class_id:{
    type: mongoose.Schema.Types.ObjectId,
    required:[true , " missing class id"]
  },
  gardes:{
    type:[gardeSchema],
    default:[]
  }

})





export const studentModel =  mongoose.model<IStudent>("Student", studentSchema);
