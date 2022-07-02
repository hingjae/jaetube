import express from "express";

const PORT = 4000;

const app = express();

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const privateMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>Not Allowed</h1>");
  }
  next();
};

const handleHome = (req, res) => {
  return res.end();
};

app.use(logger); //모든 route에서 middleware를 사용함.!!
app.get("/", handleHome);

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);
