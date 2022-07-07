import express from "express";
import {
  watch,
  getUpload,
  postUpload,
  getEdit,
  postEdit,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

//순서 중요 24자리 16진수
videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(deleteVideo);

videoRouter.route("/upload").get(getUpload).post(postUpload);
// videoRouter.get("/upload", getUpload);
// videoRouter.post("/upload", postUpload);

export default videoRouter;
