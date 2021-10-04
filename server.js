import db from "./db/connection.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import PostRoutes from "./routes/posts.js"

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(logger("dev"))
app.use("/api", PostRoutes)

db.on("connected", () => {
  console.log("Ayo we connected")
  app.listen(PORT, () => { console.log(`The express server application is running on port ${PORT}`) })
})

