import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import LoadingScreen from './pages/LoadingPage/LoadingScreen';
import Videos from './pages/YouTubePage/Videos';
import Business from './pages/BusinessPage/Business';
import Gallery from './pages/GalleryPage/Gallery';
import Blog from './pages/BlogPage/Blog';
import BlogDetail from './pages/BlogDetailPage/BlogDetail';
import Code from './pages/CodePage/Code';
import Navbar from "./components/common/Navbar";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {

  const [loading, setLoading] = React.useState(true);

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
            <Route path="/business" element={<Business />} />
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