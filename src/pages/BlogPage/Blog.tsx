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

      <section className={`blog-page ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-up" : ""}`}>


        <div className={`blog-page ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-up" : ""}`}>
          <header className="blog-header">
            <h1 className="blog-title">Between the Lines: Essays and Reflections </h1>
            <p className="blog-subtitle">This collection is my return to reading and writing with purpose—reflecting on each book as a chance to think deeply and rediscover the joy of comprehension.
            </p>
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
      </section>
    </>
  );
}
