import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

export default function Post(props) {
  return (
    <>
      <Link className="post" to={`/posts/${props.id}`}>
        <div>{props.title}</div>
        <div>{props.author}</div>
        <div>{props.content}</div>
        <img src={props.imgUrl} alt={props.title} />
      </Link>
    </>
  )
}
