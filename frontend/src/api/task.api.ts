"use server";

import { TaskTypes } from "@/types";

export const delay = (time: number) =>
  new Promise<number>((resolve) => setTimeout(resolve, time));

export const getAll = async (): Promise<TaskTypes.Task[]> => {
  await delay(3000);
  const response = await fetch("http://localhost:4000/task", {
    method: "get",
    next: {
      tags: ["tasks"],
    },
  });

  return response.json();
};
