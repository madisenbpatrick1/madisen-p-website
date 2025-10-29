import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import blogData from "../../data/blogData";
import "./BlogDetail.css";
import ReactMarkdown from "react-markdown";

//TODO: Update Blog answers and update pdf file once doc completed 
export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    if (blog?.markdown) {
      fetch(blog.markdown)
        .then((res) => res.text())
        .then((text) => setMarkdownContent(text))
        .catch((err) => console.error("Error loading markdown:", err));
    }
  }, [blog]);

  if (!blog) return <p>Blog not found.</p>;

  return (
    <>
      <Navbar />

      <section className="blog-detail-title-section">
        <div className="neon-border">
          <h1 className="blog-detail-title">{blog.title}</h1>
          {blog.date && <p className="blog-detail-date">{blog.date}</p>}
        </div>
      </section>


      {/* Magazine Layout */}
      <section className="blog-magazine-layout">
        <div className="magazine-image">
          <img src={blog.cover} alt={blog.title} />
        </div>

        <div className="magazine-text">
          <div className="magazine-essay">
          
            <div className="essay-body">
              <ReactMarkdown>
                {markdownContent}
              </ReactMarkdown>
            </div>
          
          </div>
          
          <div className="back-btn-container">
            <Link to="/blog" className="back-button">← Back to Blog</Link>
          </div>
          {blog.pdf && (
            <div className="pdf-link-container">
              <a
                href={blog.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-download-link"
              >
                📄 View Full Essay (PDF)
              </a>
            </div>
          )}

        </div>
      </section>

    </>
  );
}
