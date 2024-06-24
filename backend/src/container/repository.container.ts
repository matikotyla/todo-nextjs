import { Container } from "inversify";
import { TaskRepository } from "@/repository";

const RepositoryContainer = new Container({ defaultScope: "Singleton" });

RepositoryContainer.bind<TaskRepository>(TaskRepository).toSelf();

export { RepositoryContainer };
