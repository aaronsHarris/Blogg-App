import db from "./db/connection.js";

const PORT = process.env.PORT || 3000

db.on("connected", () => {
  console.log("Ayo we connected"),
    app.listen(PORT, () => { console.log(`The express server application is running on port ${PORT}`) })
})