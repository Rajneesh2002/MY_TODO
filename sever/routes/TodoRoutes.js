import { Router } from "express";
import { getTodos ,saveTodos } from "../controllers/TodoControllers.js"
const router = Router()

router.get("/get",getTodos);
router.post("/save",saveTodos);

export default router