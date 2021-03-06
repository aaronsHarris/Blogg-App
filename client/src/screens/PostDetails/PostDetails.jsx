import { useState, useEffect } from "react"
import { useParams, Link, useHistory } from "react-router-dom"
import "./PostDetails.css"
import Layout from "../../components/Layout/Layout"
import { getPost, deletePost } from "../../services/posts"

export default function PostDetails() {

  const [post, setPost] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();


  useEffect(() => {
    const fetchPost = async () => {
      const res = await getPost(id);
      setPost(res)
      setIsLoaded(true)
    }
    fetchPost();
  }, [id])


  const handleDelete = () => {
    deletePost(id)
    history.push("/")
  }


  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout>
      <div className="post-container">
        <img src={post.imgUrl} alt={post.title} />
        <div className="details">
          <h3>{post.title}</h3>
          <h4>{post.author}</h4>
          <p>{post.content}</p>
          <div className="button-container">
            <button className="edit-button"><Link to={`/posts/${id}/edit`} className="edit-link">Edit</Link></button>
            <button className="delete-button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
