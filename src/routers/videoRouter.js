import express from "express";
import {
  watch,
  getUpload,
  postUpload,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

//순서 중요
videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
// videoRouter.get("/upload", getUpload);
// videoRouter.post("/upload", postUpload);

export default videoRouter;
