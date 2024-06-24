import { TaskService } from "@/service";
import { Container } from "inversify";

const ServiceContainer = new Container({ defaultScope: "Singleton" });

ServiceContainer.bind<TaskService>(TaskService).toSelf();

export { ServiceContainer };
