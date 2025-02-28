// import mongoose from 'mongoose'
// const leaveReqestSchema=new mongoose.Schema({
//     employeeId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
//     leaveType:{type:String,eum:['sick','casual'],required:true},
//     startDate:{type:Date,required:true},
//     endDate:{type:Date,required:true},
//     status:{type:String,enum:['pending','approved','rejected'] ,rquired:true}
// })
import mongoose, { Schema, Document } from 'mongoose';

interface ILeaveRequest extends Document {
  employeeId: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  status: string; // e.g., "pending", "approved", "rejected"
}

const leaveRequestSchema = new Schema<ILeaveRequest>({
  employeeId: { type: String, required: true },
  leaveType: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, default: 'pending' },
});

const LeaveRequest = mongoose.model<ILeaveRequest>('LeaveRequest', leaveRequestSchema);

export default LeaveRequest;  // Ensure the model is exported
