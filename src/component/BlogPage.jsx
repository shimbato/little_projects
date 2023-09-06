import React from 'react'
import { useEffect, useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import { Blogfilter } from './layout/Blogfilter';


export const BlogPage = () => {
const [posts, setPosts] = useState([]);
const [searchParams, setSearchParams] = useSearchParams();

const postQuery = searchParams.get('post') || '';
const latest = searchParams.has('latest');
const startForms = latest ? 80 :1;



  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
  },[]);

  return (
    <div>
    <h1>News</h1>
    <Blogfilter postQuery = {postQuery} latest ={latest} setSearchParams = {setSearchParams}/>
    <Link to={`/posts/new`} style={{margin: "1rem 0", display: 'inline-block'}}>Add new post </Link>
    {
      posts.filter(
        post => post.title.includes(postQuery) && post.id >= startForms
      ).map(post => (
        <Link key={post.id} to={`/posts/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))
    }
    </div>
  )
}
