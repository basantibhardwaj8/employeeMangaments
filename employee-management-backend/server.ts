
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './src/routes/userRoutes';  // Fixed import for userRoutes
import leaveRoutes from './src/routes/leaveRoutes';  // Leave routes import
import departmentRoutes from './src/routes/departmentRoutes';  // Department routes import

const app = express();
const port = 5002;

// Middleware
app.use(cors());  // Allow all origins or customize if needed
app.use(bodyParser.json());  // Parse incoming requests as JSON

// Routes
app.use('/api/users', userRoutes);  // User route
app.use('/api/leaves', leaveRoutes);  // Leave route
app.use('/api/departments', departmentRoutes);  // Department route

// MongoDB connection (removing deprecated options)
mongoose.connect('mongodb://localhost:27017/employeeDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
