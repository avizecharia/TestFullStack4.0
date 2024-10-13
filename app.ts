import express,{Express} from "express";
import authRoutes from './src/routes/authRoutes'
import teacherRoutes from './src/routes/teachersRoutes'
import studentRoutes from './src/routes/studentsRoutes'
import dotenv from "dotenv";
import connectDB from "./src/config/dbConfig";

dotenv.config();

const app :Express = express();
const PORT = process.env.PORT || 3000;
connectDB()

// Middleware
app.use(express.json());


// Routes
app.use("/auth" , authRoutes)
app.use("/teachers" , teacherRoutes)
app.use("/students" , studentRoutes)

// app.use()

// Error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
