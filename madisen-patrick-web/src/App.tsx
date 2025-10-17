import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import Videos from './pages/YouTubePage/Videos';
import Business from './pages/BusinessPage/Business';
import Gallery from './pages/GalleryPage/Gallery';
import Blog from './pages/BlogPage/Blog';
import Code from './pages/CodePage/Code';
import Navbar from "./components/common/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
          {/* Route path="/youtube/*" ... */}
          <Route path="/videos" element={<Videos />} />
          <Route path="/business" element={<Business />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/code" element={<Code />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;