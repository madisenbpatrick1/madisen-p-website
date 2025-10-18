import Navbar from "../../components/common/Navbar";
import blogData from "../../data/blogData";
import BlogCard from "../../components/BlogCard/BlogCard";
import "./Blog.css";
import { useFade } from "../../hooks/useFade";

export default function Blog() {
  const { fadeIn, fadeOut } = useFade();

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
