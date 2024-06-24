import { ModelType } from "@/type";

export namespace TaskType {
  export interface Task extends ModelType.Document {
    content: string;
    description: string;
  }

  export namespace GetAll {
    export interface Request {}
  }
}
