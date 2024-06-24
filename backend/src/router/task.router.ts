import { Router } from "express";
import { inject, injectable } from "inversify";

import { TaskController } from "@/controller";

@injectable()
export class TaskRouter {
  private readonly router: Router = Router();

  constructor(@inject(TaskController) taskController: TaskController) {
    this.router.get("/", taskController.getAll);
    this.router.post("/", taskController.add);
  }

  public get(): Router {
    return this.router;
  }
}
