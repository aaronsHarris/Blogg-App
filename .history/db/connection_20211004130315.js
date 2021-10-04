import mongoose from "mongoose"

let MONGODB_URI =
  process.env.PROD_MONGODB ||
  "mongodb://127.0.0.1:27017/AaronBloggDB"

mongoose
  .connect(MONGODB_URI, ), { useUnifiedTopology: true, useNewUrlParser: true })
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))