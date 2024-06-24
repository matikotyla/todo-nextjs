import React, { FunctionComponent } from "react";

import {
  ContainerProps,
  ContainerStyles as styles,
} from "@/components/container";

export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
