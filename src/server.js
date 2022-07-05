import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const logger = morgan("dev");
app.use(logger);

app.set("view engine", "pug"); // pug사용을 위한 setting
app.set("views", process.cwd() + "/src/views");
app.use(express.urlencoded({ extended: true })); //express가 hrml의 form을 이해할 수 있도록함.
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
