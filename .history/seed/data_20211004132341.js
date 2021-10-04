import faker from "faker"
import db from "../db/connection.js"
import Post from "../models/post.js"

const createPosts = async () => {
  await db.dropDatabase()
  let posts = [...Array(20)].map(item => {
    return {
      title: faker.lorem.sentence,
      author: faker.lorem.author,
      content: faker.lorem.paragr,
      imgUrl: { type: String, required: false },
    }
  })
}