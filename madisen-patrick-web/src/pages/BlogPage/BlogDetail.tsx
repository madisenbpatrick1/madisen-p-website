import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import blogData from "../../data/blogData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div className="blog-detail-hero" style={{ backgroundImage: `url(${blog.image})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{blog.title}</h1>
          {/* <p className="hero-date">{blog.date}</p> */}
        </div>
      </div>

      {/* Magazine Layout */}
      <section className="blog-magazine-layout">
        <div className="magazine-image">
          <img src={blog.cover} alt={blog.title} />
        </div>

        <div className="magazine-text">
          <div className="magazine-essay">
            <h2 className="essay-heading">{blog.subtitle || "Essay"}</h2>
            <p className="essay-body">{blog.content}</p>
          </div>
          <div className="back-btn-container">
            <Link to="/blog" className="back-button">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
