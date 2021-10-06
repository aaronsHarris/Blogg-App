import { useState, useEffect } from "react"
import './EditPost.css'
import { useParams, Redirect } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { getPost, updatePost } from "../../services/posts"



export default function EditPost() {
  const [posts, setPossts] = useState({
    title: "",
    author: "",
    content: "",
    imgUrl: "",
  })
  const [isUpdated, setUpdated] = useState(false)
  let {
    id=
  }
  return (
    <div>

    </div>
  )
}
