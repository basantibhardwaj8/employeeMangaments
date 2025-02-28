import { Router } from 'express';
import { createDepartment, addEmployeeToDepartment } from '../controllers/departmentController';

const router = Router();

// Route for creating department
router.post('/create', createDepartment);

// Route for adding employee to department
router.put('/add-employee', addEmployeeToDepartment);

export default router;
