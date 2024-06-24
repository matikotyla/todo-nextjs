import React, { FunctionComponent, PropsWithChildren } from "react";

import { Content } from "@/app/dashboard/content";

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col gap-12 items-center p-24">
      <Content />
      {children}
    </div>
  );
};

export default Layout;
