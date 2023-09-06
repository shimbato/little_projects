import React from "react";
import "./index.css";
import {Routes, Route, Link} from 'react-router-dom';

import ClassCounter from "./component/ClassCounter";
import { Counter } from "./component/Counter";
import { HomePage } from "./component/HomePage";
import { AboutPage } from "./component/AboutPage";
import { BlogPage } from "./component/BlogPage";
import { NotFoundPage } from "./component/NotFoundPage";
import { Layout } from "./component/layout/Layout";
import { SinglePage } from "./component/SinglePage";
import { CreatePost } from "./component/CreatePost";
import { EditPost } from "./component/EditPost";


export const App = () => {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="posts" element={<BlogPage/>}/>
        <Route path="posts/:id" element={<SinglePage/>}/>
        <Route path="posts/:id/edit" element={<EditPost/>}/>
        <Route path="posts/new" element={<CreatePost/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </>
    //  <div className='App'>
    //       <div className='post'>
    //         <div className='post__content'>
    //           <strong>1. JavaScript</strong>
    //           <div>
    //             JavaScript
    //           </div>

    //         </div>
    //         <div className='post__btns'>
    //           <button>Delete</button>
    //         </div>

    //       </div>

    //  </div>
  );
};
