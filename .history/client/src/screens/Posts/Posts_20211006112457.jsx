import React from 'react'
import { useState, useEffect } from 'react'
import "./Posts.css"
import Layout from "../../components/Layout/Layout.jsx"
import { getPosts } from "../../services/posts"
import Post from '../../components/Post/Post'
export default function Posts() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPosts();
      setPosts(allPosts)
      console.log(allPosts)
    }
    fetchPosts()
  }, [])


  return (
    <Layout>
      <div className="posts">
        {posts.map((post) => {
          return (
            <Post id={post._id}
              title={post.title}
              author={post.author}
              content={post.content}
              imgUrl={post.imgUrl}
              key=
            />
          )
        })}
      </div>
    </Layout>
  )
}
