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
    <div className="blog-detail-page">
      <Navbar />
      <div className="blog-detail-container">
        <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        <h1 className="blog-detail-title">{blog.title}</h1>
        <p className="blog-detail-text">{blog.content}</p>

        <Link to="/blog" className="back-button">
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
