import faker from "faker"
import db from "../db/connection.js"
import Post from "../models/post.js"

const createPosts = async () => {
  await db.dropDatabase()
  
}