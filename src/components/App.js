import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../scss/Allcss.scss';
import Navbar from './Layout/Navbar';
import Topbar from './Layout/Topbar';
import Content from './Content/Content';
import NotFound from './NotFound';

const App = () => {

  return (
    <div className='wrap'>
      <Navbar />
      <section className='content-section'>
        <div className='top-bar'>
          <Topbar />
        </div>
        <article className='main-article'>
          <Routes>
            <Route path='/' element={<Content />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </article>
      </section>
    </div>
  );
}

export default App;
