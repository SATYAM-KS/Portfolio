import React from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

export const BlogPreviewSection: React.FC = () => {
  const recentBlogs = blogsData.slice(0, 2);

  return (
    <section id="blog" className="blog-section section-spacing">
      <div className="inner-container-small">
        <div className="section-title">
          <h2 className="blog-main-title">Latest From the Blog</h2>
        </div>

        <div className="w-dyn-list">
          <div role="list" className="grid-blog-item w-dyn-items">
            {recentBlogs.map((blog) => (
              <div key={blog.slug} role="listitem" className="w-dyn-item">
                <Link
                  to={`/blog/${blog.slug}`}
                  className="blog-item w-inline-block"
                >
                  <div className="blog-image-wrap">
                    <img
                      src={blog.bannerImage}
                      loading="lazy"
                      alt={blog.title}
                      className="blog-image"
                    />
                  </div>
                  <div className="blog-content">
                    <h2 style={{ color: "rgb(255,255,255)" }} className="blog-title">
                      {blog.title}
                    </h2>
                    <div className="blog-date">{blog.date}</div>
                  </div>
                  <div className="blog-button">
                    <img
                      src="/images/right-arrow.svg"
                      loading="lazy"
                      alt="Right arrow icon"
                      className="blog-button-icon"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
