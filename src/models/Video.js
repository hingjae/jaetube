import mongoose from "mongoose";
//mongoose == bridge for nodeJS, mongoDB

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 40 },
  fileUrl: { type: String, required: true },
  description: { type: String, required: true, minLength: 5 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: { type: Number, default: 0, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

// upload middleware.

const Video = mongoose.model("Video", videoSchema);
export default Video;
