import expres from "express";
import "reflect-metadata";
import moduleAlias from "module-alias";
import mongoose from "mongoose";

moduleAlias.addAliases({
  "@": `${__dirname}`,
});

import { GlobalContainer } from "@/container";
import { TaskRouter } from "@/router";

const app = expres();
const port = 4000;

const uri =
  "mongodb+srv://mattkotyla:nfSpDd9SbdxceJQP@cluster0.zo3v4eq.mongodb.net/todo?retryWrites=true&w=majority&appName=Cluster0";

app.use(expres.json());
app.use("/task", GlobalContainer.get<TaskRouter>(TaskRouter).get());

app.listen(port, async () => {
  console.log(`Server up and running on ${port} 🚀`);

  await mongoose.connect(uri);

  console.log("Database connected 💾");
});
