import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import blogData from "../../data/blogData";
import "./BlogDetail.css";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined);

  if (!blog) return <p>Blog not found.</p>;

  const toggleAnswer = (index:number) => {
    setActiveIndex(activeIndex === index ? undefined : index);
  };

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
            <h2 className="essay-heading">{blog.subtitle || "Essay"}</h2>
            {/* <p className="essay-body">{blog.content}</p> */}
          </div>
          <div className="qa-container">
          {blog.qaList?.map((item, index) => (
              <div key={index} className="qa-item">
                <button
                  className={`qa-question ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleAnswer(index)}
                >
                  {item.question}
                </button>
                <div className={`qa-answer ${activeIndex === index ? "show" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="back-btn-container">
            <Link to="/blog" className="back-button">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
