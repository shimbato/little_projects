import React from 'react'
import { useEffect } from 'react'
import { useState} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom'



export const SinglePage = () => {

const {id} = useParams()
const navigate = useNavigate()
const [post, setPost] = useState(null)
 const goBack = () => navigate(-1)// идет на один шаг назад 

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
  },[id]);

 
  return (
  <>
  <button onClick={goBack}>Back</button>
  { post && (
    <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <Link to={`/posts/${id}/edit`}>Edit post </Link>
    </>

  )}
  
  </>
  )
}
