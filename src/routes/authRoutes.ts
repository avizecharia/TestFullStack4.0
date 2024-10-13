import { Router } from "express";

const router = Router()


router.post("/login", Login);

router.delete("/logout", Logout);


export default router