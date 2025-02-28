import mongoose, { Schema, Document } from 'mongoose';

interface IDepartment extends Document {
  name: string;
  employees: string[];  // or mongoose.Types.ObjectId[] if using ObjectId
}

const departmentSchema: Schema = new Schema({
  name: { type: String, required: true },
  employees: [{ type: String }],  // or { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }
});

const Department = mongoose.model<IDepartment>('Department', departmentSchema);
export default Department;