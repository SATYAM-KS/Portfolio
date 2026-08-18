import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";
import { siteConfig } from "../data/siteData";

export const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(blogsData.length / itemsPerPage);
  const currentBlogs = blogsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main>
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
              <div className="hero-blog-inner">
                <h1 className="hero-inner-title">Latest From the Blog</h1>
                <p className="hero-inner-description">{siteConfig.tagline}</p>
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

      <section className="blog-hero-section section-spacing-bottom">
        <div className="inner-container-small">
          <div className="w-dyn-list">
            <div role="list" className="blog-hero-list w-dyn-items">
              {currentBlogs.map((blog) => (
                <div key={blog.slug} role="listitem" className="w-dyn-item">
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="blog-hero-item w-inline-block"
                  >
                    <div className="blog-hero-image-wrap">
                      <img
                        src={blog.bannerImage}
                        loading="lazy"
                        alt={blog.title}
                        className="blog-hero-image"
                      />
                    </div>
                    <div className="blog-hero-content">
                      <div className="blog-hero-meta">
                        <div className="blog-hero-badge">
                          <div className="blog-badge-title">{blog.category}</div>
                        </div>
                        <div className="blog-date">{blog.date}</div>
                      </div>
                      <h2 className="blog-hero-title">{blog.title}</h2>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div role="navigation" aria-label="List" className="w-pagination-wrapper pagination">
                <div className="pagination-item">
                  {currentPage > 1 && (
                    <button
                      onClick={() => setCurrentPage((p) => p - 1)}
                      className="button-white pagination-button"
                      style={{ border: "none", cursor: "pointer" }}
                    >
                      <div className="button-white-box pagination-white-box">
                        <div className="w-inline-block">Previous</div>
                      </div>
                    </button>
                  )}
                </div>
                <div className="pagination-item">
                  <div role="heading" className="w-page-count">
                    {currentPage} / {totalPages}
                  </div>
                </div>
                <div className="pagination-item">
                  {currentPage < totalPages && (
                    <button
                      onClick={() => setCurrentPage((p) => p + 1)}
                      className="button-white pagination-button"
                      style={{ border: "none", cursor: "pointer" }}
                    >
                      <div className="button-white-box pagination-white-box">
                        <div className="w-inline-block">Next</div>
                        <svg
                          className="w-pagination-next-icon"
                          height="12px"
                          width="12px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 12"
                          transform="translate(0, 1)"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            fillRule="evenodd"
                            d="M4 2l4 4-4 4"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
