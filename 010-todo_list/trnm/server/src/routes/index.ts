import { Router } from "express";
import * as TodoRoutes from "../controller/todos";

const router: Router = Router();

router.get("/todos", TodoRoutes.getTodos);
router.get("/todo/:id", TodoRoutes.getTodoById);
router.post("/todo", TodoRoutes.addTodo);
router.put("/todo/:id", TodoRoutes.updateTodo);
router.delete("/todo/:id", TodoRoutes.deleteTodo);

export default router;