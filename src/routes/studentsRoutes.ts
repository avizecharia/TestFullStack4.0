import { Router } from "express";
import { registerStudent } from "../controllers/studentController";


const studentsRoutes = Router();

studentsRoutes.post("/register",registerStudent);
studentsRoutes.get("/", ()=>{});
studentsRoutes.get("/:username", ()=>{});

export default studentsRoutes;
