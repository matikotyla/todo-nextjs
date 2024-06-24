import { injectable } from "inversify";

import { TaskModel } from "@/model";
import { TaskType } from "@/type";

@injectable()
export class TaskRepository {
  constructor() {}

  public getAll = (): Promise<TaskType.Task[]> => {
    return TaskModel.find<TaskType.Task>({});
  };

  // public get = (): Promise<TaskType.Task> => {
  //   return TaskModel.findOne<TaskType.Task>({
  //     _id: "asd",
  //   });
  // };

  public add = (data: TaskType.Task) => {
    return TaskModel.create<TaskType.Task>(data);
  };
}
