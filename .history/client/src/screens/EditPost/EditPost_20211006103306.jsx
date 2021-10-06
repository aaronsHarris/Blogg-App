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

  const handleChange = (event) => {
    const { name, value } = event.target
    setPosts({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updated = await updatePost(id, posts)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/posts/${id}`} />
  }

  return (
    <Layout>
      <div className='posts-edit'>
        <div className='image-container'>
          <img
            className='edit-posts-image'
            src={post.imgUrl}
            alt={product.title}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={post.imgUrl}
              name='imgUrl'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Title'
            value={post.title}
            name='title'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-author'
            placeholder='Author'
            value={post.author}
            name='author'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-content'
            rows={10}
            cols={78}
            placeholder='Content'
            value={post.content}
            name='content'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
   </Layout>
  )
}
