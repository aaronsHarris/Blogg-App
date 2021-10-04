import faker from "faker"
import db from "../db/connection.js"
import Post from "../models/post.js"

const createPosts = async () => {
  await db.dropDatabase()
  let posts = [...Array(20)].map(item => {
    return {
      title: faker.lorem.sentence(),
      author: faker.name.firstName(),
      content: faker.lorem.paragraph(),
      imgUrl: faker.internet.url,
    }
  })
  await Post.insertMany(posts)
  db.close()
}

createPosts()