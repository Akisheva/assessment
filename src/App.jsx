import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.scss';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog'

const App = () => {

  return (
    <Routes>
        <Route path = '/' element = {<Layout/>}> 
          <Route index element = {<Home/>}/>                          
          <Route path = '/blog' element = {<Blog/>}/>
        </Route>  
      </Routes>
  )
}

export default App;
