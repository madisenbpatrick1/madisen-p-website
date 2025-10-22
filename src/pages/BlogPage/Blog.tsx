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
            <p className="blog-subtitle">This collection marks my return to reading and writing with purpose—treating every book as a chance to think deeply, stay engaged, and rediscover the joy of comprehension. These essays capture my reflections on the novels I’ve read and the lessons they’ve left behind.
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
