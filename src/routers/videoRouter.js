import express from "express";
import {
  watch,
  upload,
  deleteVideo,
  getEdit,
  postEdit,
} from "../controllers/videoController";

const videoRouter = express.Router();

//순서 중요
videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
