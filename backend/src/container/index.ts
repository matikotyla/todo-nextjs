import { Container } from "inversify";

import { RepositoryContainer } from "@/container/repository.container";
import { ServiceContainer } from "@/container/service.container";
import { ControllerContainer } from "@/container/controller.container";
import { RouterContainer } from "@/container/router.container";

const GlobalContainer = Container.merge(
  ControllerContainer,
  ServiceContainer,
  RepositoryContainer,
  RouterContainer
);

export { GlobalContainer };
