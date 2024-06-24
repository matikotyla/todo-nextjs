import React from "react";

import { delay } from "@/api/task.api";

const First = async () => {
  const data = await delay(1000);

  return <div>First</div>;
};

export default First;
