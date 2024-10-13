import mongoose, { Schema, Document, Types, InferSchemaType } from "mongoose";
import { isEmail } from 'validator';

export interface ITeacher extends Document {
  teacher_name: string;
  teacher_email: string;
  teacher_password:string;
  class_name:string;
  students?:Types.ObjectId[];
}


const teacherSchema = new Schema<ITeacher>({
    teacher_name : {
    type: String,
    required : [true, "you  missing user name"],
    min:[4, "insert min 4 chart"],
    max:[20,"you cant insert more then 20 chart"],
    unique:true
  },
  teacher_password:{
    type:String,
    required: [true, "you missing a password"],
    min:[4, "insert min 4 chart"],
    max:[20,"you cant insert more then 20 chart"]
  },
  teacher_email:{
    type:String,
    required: [true , " you must insert email"],
    validate: [ isEmail, 'invalid email' ],
    unique:true
  },
  class_name: {
    type:String,
    required:[true,"tou must insert name for class"],
    unique:true
  },
  students:{
    type:[Types.ObjectId],
    ref:"students",
    default:[]
  }

});

export type Teacher = InferSchemaType<typeof teacherSchema>;

export const teacherModel =  mongoose.model<ITeacher>("Teacher", teacherSchema);


