// import React, {useEffect, useState} from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/common/Navbar";
// import blogData from "../../data/blogData";
// import "./Blog.css";

// export default function Blog() {
//   const [fadeIn, setFadeIn] = React.useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setFadeIn(true), 200); // small delay for smoothness
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       <Navbar />

//       <div className={`blog-page ${fadeIn ? "fade-in" : ""}`}>

//         <header className="blog-header">
//           <h1 className="blog-title">Book Essays & Reflections</h1>
//           <p className="blog-subtitle">Exploring stories that shape the way we think.</p>
//         </header>

//         <div className="blog-grid">
//           {blogData.map((blog) => (
//             <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-card">
//               <div className="blog-image-wrapper">
//                 <img src={blog.image} alt={blog.title} className="blog-image" />
//               </div>
//               <div className="blog-info">
//                 <h2 className="blog-card-title">{blog.title}</h2>
//                 <p className="blog-card-snippet">{blog.snippet}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


import React from "react";
import Navbar from "../../components/common/Navbar";
import blogData from "../../data/blogData";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blog.css";
import { useFade } from "../../hooks/useFade";
import { useNavigate } from "react-router-dom";

export default function Blog() {
  const { fadeIn, fadeOut, triggerFadeOut } = useFade();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    triggerFadeOut(() => navigate(path), 1200);
  };

  return (
    <>
      <Navbar />

      <div className={`blog-page ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-up" : ""}`}>
        <header className="blog-header">
          <h1 className="blog-title">Book Essays & Reflections</h1>
          <p className="blog-subtitle">Exploring stories that shape the way we think.</p>
        </header>

        <div className="blog-grid">
          {blogData.map((blog, index) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              snippet={blog.snippet}
              image={blog.image}
              fadeOut={fadeOut}
              delay={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
