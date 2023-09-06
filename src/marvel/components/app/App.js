import React, { lazy, Suspense } from "react";
import { AppHeader } from "../appHeader/AppHeader";

import { Route, Router, Routes } from "react-router-dom";
import Spinner from "../spinner/Spinner";
import {MainPage} from '../pages/MainPage'

const Page404 = lazy(() => import('../pages/404'))
// const MainPage = lazy(()=> import('../pages/MainPage') )
const ComicPage = lazy(()=> import('../pages/ComicPage') )
const SingleComicPage = lazy(()=> import('../pages/SingleComicPage') )

export const App = () => {
  return (
    
      <div className="container">
        <AppHeader />
        <main className="main">
          <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/comics" element={<ComicPage />}/>
            <Route path="*" element={<Page404 />}/>
            <Route path="/comics/:comicId" element={<SingleComicPage/>}/>
          </Routes>
          </Suspense>
       
        </main>
      </div>
   
  );
};
