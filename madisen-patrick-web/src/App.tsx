import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Videos from './pages/YouTubePage/Videos';
import Gallery from './pages/GalleryPage/Gallery';
import Blog from './pages/BlogPage/Blog';
import BlogDetail from './pages/BlogDetailPage/BlogDetail';
import Code from './pages/CodePage/Code';
import { HashRouter, Route, Routes } from "react-router-dom";
import AboutMe from './pages/AboutMePage/AboutMe';

function App() {

  return (
    <HashRouter>
      {/* {loading && <LoadingScreen onFinish={() => setLoading(false)} />} */}
      {/* <Navbar /> */}
      <div className="App">
        {/* {!loading && ( */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here */}
            {/* Route path="/youtube/*" ... */}
            <Route path="/videos" element={<Videos />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/code" element={<Code />} />
          </Routes>
        {/* )} */}
      </div>
    </HashRouter>
  );
}

export default App;