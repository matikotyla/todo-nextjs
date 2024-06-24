import React, { FunctionComponent } from "react";
import Hyperlink from "next/link";
import { clsx } from "clsx";

import { LinkProps, LinkStyles as styles } from "@/components/header/link";

export const Link: FunctionComponent<LinkProps> = ({
  to,
  name,
  active = false,
}) => {
  return (
    <Hyperlink
      href={to}
      className={clsx(styles.root, {
        [styles.active]: active,
      })}
    >
      {name}
    </Hyperlink>
  );
};
