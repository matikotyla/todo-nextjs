import { Container } from "inversify";

import { TaskRouter } from "@/router";

const RouterContainer = new Container({ defaultScope: "Singleton" });

RouterContainer.bind<TaskRouter>(TaskRouter).toSelf();

export { RouterContainer };
