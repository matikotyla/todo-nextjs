import mongoose from "mongoose";
import { ObjectId } from "mongodb";

export namespace ModelType {
  export type Document = Pick<mongoose.Document<ObjectId>, "_id" | "__v">;
}
