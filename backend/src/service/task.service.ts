import { TaskModel } from "@/model";
import { TaskType } from "@/type";
import { TaskRepository } from "@/repository";
import { inject, injectable } from "inversify";

@injectable()
export class TaskService {
  private readonly taskRepository: TaskRepository;

  constructor(@inject(TaskRepository) taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  public getAll = (): Promise<TaskType.Task[]> => {
    // error validation

    return this.taskRepository.getAll();
  };

  public add = (data: TaskType.Task) => {
    // validation

    return this.taskRepository.add(data);
  };
}
