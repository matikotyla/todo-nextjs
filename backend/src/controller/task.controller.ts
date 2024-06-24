import { TaskModel } from "@/model";
import { TaskService } from "@/service";
import { ApiType, TaskType } from "@/type";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "inversify";

@injectable()
export class TaskController {
  private readonly taskService: TaskService;

  public constructor(@inject(TaskService) taskService: TaskService) {
    this.taskService = taskService;
  }

  public getAll = (
    req: Request,
    res: Response<TaskType.Task[]>,
    next: NextFunction
  ): void => {
    this.taskService
      .getAll()
      .then((tasks) => res.status(ApiType.StatusCode.Ok).json(tasks))
      .catch(next);
  };

  public add = (
    req: Request,
    res: Response<TaskType.Task>,
    next: NextFunction
  ): void => {
    console.log(req.body);
    this.taskService
      .add(req.body)
      .then((task) => res.status(ApiType.StatusCode.Created).json(task))
      .catch(next);
  };
}
