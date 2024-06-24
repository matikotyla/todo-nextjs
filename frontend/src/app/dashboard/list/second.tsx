import React from "react";

import { delay } from "@/api/task.api";

const Second = async () => {
  const data = await delay(2000);

  return <div>Second</div>;
};

export default Second;
