import React, { Suspense } from "react";

import { getAll } from "@/api";

import First from "@/app/dashboard/list/first";
import Second from "@/app/dashboard/list/second";

const Page = async () => {
  const tasks = await getAll();

  return (
    <div>
      <Suspense fallback={<p>loading first</p>}>
        <First />
      </Suspense>
      <Suspense fallback={<p>loading second</p>}>
        <Second />
      </Suspense>
      {tasks.map((task, index) => (
        <p key={index}>{task.content}</p>
      ))}
    </div>
  );
};

export default Page;
