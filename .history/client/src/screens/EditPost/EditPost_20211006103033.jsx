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
            src={product.imgURL}
            alt={product.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={product.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={product.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className='input-price'
            placeholder='Price'
            value={product.price}
            name='price'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={product.description}
            name='description'
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
