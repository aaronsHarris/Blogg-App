import Post from "../models/post.js"

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find()
    res.json(post)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json(post)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const createPost = async (req, res) => {
  try {
    const post = new Post(req.body)
    await post.save()
    res.status(201).json(post)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.status(200).send('Post deleted')
    }
    throw new Error('Post not found')
  } catch (error) {
    res.status(500).send(error.message)
  }
}