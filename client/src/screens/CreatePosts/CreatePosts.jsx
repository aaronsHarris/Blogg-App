import { useState } from 'react'
import './CreatePosts.css'
import Layout from '../../components/Layout/Layout'
import { useHistory } from 'react-router-dom'
import { createPost } from '../../services/posts.js'

export default function CreatePosts(props) {
  const history = useHistory()
  const [ post, setPost ] = useState({
    title: '',
    author: '',
    content: '',
    imgUrl: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await createPost(post)
    console.log(res)
    history.push('/')
  }

  return (
    <Layout>
      <form className='create-post' onSubmit={handleSubmit}>
        <input 
          className='input-title'
          name='title'
          value={post.title}
          placeholder='title'
          required
          autoFocus
          onChange={handleChange}
        />
        <input 
          className='input-author'
          name='author'
          value={post.author}
          placeholder='author'
          required
          onChange={handleChange}
        />
        <textarea
          className='textarea-content'
          name='content'
          value={post.content}
          placeholder='content'
          required
          rows={10}
          onChange={handleChange}
        />
        <input
          className="input-imgUrl"
          name='imgUrl'
          value={post.imgUrl}
          placeholder='image link'
          onChange={handleChange}
        />
        <button className='submit-btn' type='submit'>
          Submit
        </button>
      </form>
    </Layout>
  )
}
