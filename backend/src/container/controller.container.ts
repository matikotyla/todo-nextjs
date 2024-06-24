import { Container } from "inversify";

import { TaskController } from "@/controller";

const ControllerContainer = new Container({ defaultScope: "Singleton" });

ControllerContainer.bind<TaskController>(TaskController).toSelf();

export { ControllerContainer };
