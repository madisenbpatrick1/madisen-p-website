import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

interface BlogCardProps {
  id: string;
  title: string;
  subtitle: string;
  snippet: string;
  image: string;
  fadeOut?: boolean;
  delay?: number;
}

export default function BlogCard({ id, title, subtitle, snippet, image, fadeOut, delay = 0 }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${id}`}
      className={`blog-card ${fadeOut ? `fade-up-card delay-${delay}` : ""}`}
    >
      <div className="blog-image-wrapper">
        <img src={image} alt={title} className="blog-image" />
      </div>
      <div className="blog-info">
        <h2 className="blog-card-title">{title}</h2>
        <p className="blog-card-snippet">{snippet}</p>
      </div>
    </Link>
  );
}
