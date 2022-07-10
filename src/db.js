import mongoose from "mongoose";

console.log(process.env.DB_URL, process.env.COOKIE_SECRET);

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB.");
const handleError = (error) => console.log("❌ DB Error", error);

db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);
