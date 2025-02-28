// departmentController.ts
import { Request, Response } from 'express';
import Department from '../models/DepartmentModel'; // Adjust the path as necessary

// Create a new department
export const createDepartment = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: 'Department name is required' });
    return;
  }

  const department = new Department({ name });

  try {
    await department.save();
    res.status(201).json({ message: 'Department created', department });
  } catch (err) {
    res.status(500).json({ message: 'Error creating department', error: err });
  }
};

// Add an employee to the department
export const addEmployeeToDepartment = async (req: Request, res: Response): Promise<void> => {
  const { departmentId, employeeId } = req.body;

  if (!departmentId || !employeeId) {
    res.status(400).json({ message: 'Department ID and Employee ID are required' });
    return;
  }

  try {
    const department = await Department.findById(departmentId);
    if (!department) {
      res.status(404).json({ message: 'Department not found' });
      return;
    }

    if (department.employees.includes(employeeId)) {
      res.status(400).json({ message: 'Employee already in this department' });
      return;
    }

    department.employees.push(employeeId);
    await department.save();

    res.status(200).json({ message: 'Employee added to department', department });
  } catch (err) {
    res.status(500).json({ message: 'Error adding employee to department', error: err });
  }
};