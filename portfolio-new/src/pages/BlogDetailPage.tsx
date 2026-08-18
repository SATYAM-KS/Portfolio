import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import { siteConfig } from "../data/siteData";

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  // Get 2 other recent articles
  const recentBlogs = blogsData.filter((b) => b.slug !== blog.slug).slice(0, 2);

  return (
    <main>
      {/* Floating Back Button */}
      <Link to="/blog" className="back-button w-inline-block">
        <div className="back-button-link">
          <img
            loading="lazy"
            src="/images/icon-2016.svg"
            alt="Arrow Icon"
            className="back-button-icon"
          />
          <div className="back-button-text">Back</div>
        </div>
      </Link>

      {/* Hero Inner Section */}
      <section className="hero-inner-section">
        <div className="inner-container-small">
          <div className="hero-content-wrap">
            <div className="w-layout-grid grid-hero-top">
              <Link to="/" className="hero-logo-wrap w-inline-block">
                <img
                  src={siteConfig.avatarMain}
                  loading="lazy"
                  alt={`${siteConfig.name} Profile`}
                  className="hero-logo"
                />
              </Link>
              <div className="hero-info">
                <img
                  src="/images/globe.svg"
                  loading="lazy"
                  alt="Globe Icon"
                  className="hero-info-image"
                />
                <div className="hero-location">
                  <div className="hero-location-title">{siteConfig.location}</div>
                  <div className="hero-location-description">{siteConfig.coordinates}</div>
                </div>
              </div>
            </div>

            <div className="hero-inner-info">
              <h1 className="hero-inner-title">{blog.title}</h1>
              <div className="hero-inner-meta">
                <div className="hero-inner-badge">
                  <div className="blog-badge-title">{blog.category}</div>
                </div>
                <div className="hero-blog-date">{blog.date}</div>
              </div>
            </div>

            <div className="divider-left"></div>
            <div className="divider-right"></div>
            <div className="hero-inner-shadow"></div>
          </div>
        </div>

        <div className="hero-inner-decoration">
          <div className="inner-container">
            <div className="hero-shape">
              <div className="hero-shape-inner"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Detail Content */}
      <section className="blog-detail-section">
        <div className="inner-container-small">
          <div className="blog-detail-content">
            <div className="blog-detail-image">
              <img
                src={blog.bannerImage}
                loading="lazy"
                alt={blog.title}
                className="blog-detail-banner"
              />
            </div>

            <div className="blog-rich-text w-richtext">
              <p>{blog.content.intro}</p>

              {blog.content.sections.map((section, idx) => (
                <React.Fragment key={idx}>
                  <h5>{section.heading}</h5>
                  <p>{section.body}</p>

                  {section.list && (
                    <ul role="list">
                      {section.list.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.image && (
                    <figure className="w-richtext-align-fullwidth w-richtext-figure-type-image" style={{ margin: "32px 0" }}>
                      <div>
                        <img
                          loading="lazy"
                          alt="Article illustration"
                          src={section.image}
                          style={{ width: "100%", borderRadius: "12px" }}
                        />
                      </div>
                    </figure>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Section */}
      <section className="blog-simple-section section-spacing-bottom">
        <div className="inner-container-small">
          <div className="section-title">
            <h2 className="blog-simple-title">Recent blog</h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="grid-blog-item w-dyn-items">
              {recentBlogs.map((rec) => (
                <div key={rec.slug} role="listitem" className="w-dyn-item">
                  <Link
                    to={`/blog/${rec.slug}`}
                    className="blog-item w-inline-block"
                  >
                    <div className="blog-image-wrap">
                      <img
                        src={rec.bannerImage}
                        loading="lazy"
                        alt={rec.title}
                        className="blog-image"
                      />
                    </div>
                    <div className="blog-content">
                      <h2 style={{ color: "rgb(255,255,255)" }} className="blog-title">
                        {rec.title}
                      </h2>
                      <div className="blog-date">{rec.date}</div>
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
    </main>
  );
};
