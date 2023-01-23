import { Router } from "express";

import {
  all,
  createTask,
  deleteTask,
  renderTaskEdit,
  taskEdit,
  toggledone,
} from "../controllers/taskControllers";

const router = Router();

router.get("/", all); // obtener todas las tareas
router.post("/tasks/add", createTask); // crear tareas
router.get("/task/:id/toggledone", toggledone);
router.get("/task/:id/edit", renderTaskEdit);
router.post("/task/:id/edit", taskEdit); // Para actulizar task seria method put
router.get("/task/:id/delete", deleteTask); // Para borrar una task seria method delete

export default router;
