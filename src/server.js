import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); // pug사용을 위한 setting
app.set("views", process.cwd() + "/src/views"); //pug default경로
app.use(logger);
app.use(express.urlencoded({ extended: true })); //express가 html의 form을 이해할 수 있도록함.
app.use(express.json()); // it can make send backend json(text) 백엔드로 text를 send
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3.6e6 * 24, //cookie keep 24hours
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// local object는 이미 pug templates에 import 된 상태

// local object를 사용하면 전역변수로 쓸 수 있음.
//render로 변수를 넘길 필요가 없음

app.use((req, res, next) => {
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  next();
});

app.use(flash());
app.use(localsMiddleware); //session middle ware다음에 와야함.
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/api", apiRouter);
app.use("/convert", express.static("node_modules/@ffmpeg/core/dist"));

export default app;
