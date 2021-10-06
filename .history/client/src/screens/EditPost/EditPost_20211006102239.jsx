import { useState, useEffect } from "react"
import './EditPost.css'
import { useParams, Redirect } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { getPost, updatePost } from "../../services/posts"



export default function EditPost() {
  const [posts, setPosts] = useState({
    title: "",
    author: "",
    content: "",
    imgUrl: "",
  })
  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()
  
  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id)
      setPosts(post)  
    }
      fetchPost()
  }, [id])

  const handleChange = 
  return (
    <div>

    </div>
  )
}
