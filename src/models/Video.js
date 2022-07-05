import mongoose from "mongoose";
//mongoose == bridge for nodeJS, mongoDB
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hasgtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});
