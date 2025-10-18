import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import blogData from "../../data/blogData";
import "./Blog.css";

export default function Blog() {
  return (
    <>
      <Navbar />

      <div className="blog-page">

        <header className="blog-header">
          <h1 className="blog-title">Book Essays & Reflections</h1>
          <p className="blog-subtitle">Exploring stories that shape the way we think.</p>
        </header>

        <div className="blog-grid">
          {blogData.map((blog) => (
            <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-card">
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
              </div>
              <div className="blog-info">
                <h2 className="blog-card-title">{blog.title}</h2>
                <p className="blog-card-snippet">{blog.snippet}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
