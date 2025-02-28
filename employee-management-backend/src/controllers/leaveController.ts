// import { Request, Response } from 'express';
// import LeaveRequest from '../models/LeaveRequestModel';  // Adding the .ts extension may help in certain configurations.



// // Apply for leave
// export const applyLeave = async (req: Request, res: Response) => {
//   const { employeeId, leaveType, startDate, endDate } = req.body;

//   // Create a new leave request
//   const leaveRequest = new LeaveRequest({ employeeId, leaveType, startDate, endDate });

//   try {
//     // Save the leave request in the database
//     await leaveRequest.save();
//     res.status(201).json({ message: 'Leave request submitted' });
//   } catch (err) {
//     res.status(500).json({ message: 'Error applying for leave', error: err });
//   }
// };

// // Admin: Approve/Reject leave
// export const handleLeaveRequest = async (req: Request, res: Response) => {
//   const { leaveId, status } = req.body;

//   try {
//     // Find the leave request by ID
//     const leaveRequest = await LeaveRequest.findById(leaveId);

//     // Check if the leave request exists
//     if (!leaveRequest) {
//       return res.status(404).json({ message: 'Leave request not found' });
//     }

//     // Update the leave request status
//     leaveRequest.status = status;
//     await leaveRequest.save();

//     res.status(200).json({ message: `Leave request ${status}` });
//   } catch (err) {
//     res.status(500).json({ message: 'Error handling leave request', error: err });
//   }
// };
import { Request, Response } from 'express';

// Apply leave function
export const applyLeave = async (req: Request, res: Response): Promise<void> => {
  const { employeeId, leaveType, startDate, endDate } = req.body;

  // Logic to apply leave
  // For example, save the leave request to the database

  res.status(201).json({ message: 'Leave applied successfully' });
};

// Handle leave request function
export const handleLeaveRequest = async (req: Request, res: Response): Promise<void> => {
  const { leaveRequestId, action } = req.body;

  // Logic to handle leave request (approve/reject)
  // For example, update the leave request status in the database

  res.status(200).json({ message: 'Leave request handled successfully' });
};