import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { siteConfig } from "../data/siteData";

export const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  // Get 2 other recent projects
  const recentProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <main>
      {/* Floating Back Button */}
      <Link to="/work" className="back-button w-inline-block">
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
              <div className="hero-inner-title-wrap">
                <h1 className="hero-inner-title">{project.title}</h1>
                <p className="hero-inner-description">{project.tagline}</p>
              </div>

              <div className="w-layout-grid grid-hero-inner">
                <div className="hero-work-info one">
                  <h2 className="hero-service-title">Service</h2>
                  <div className="hero-service-name">{project.service}</div>
                </div>
                <div className="hero-work-info two">
                  <h2 className="hero-service-title">Release date</h2>
                  <div className="hero-service-name">{project.releaseDate}</div>
                </div>
                <div className="hero-work-info three">
                  <h2 className="hero-service-title">Client</h2>
                  <div className="hero-service-name">{project.client}</div>
                </div>
                <div className="hero-work-info four">
                  <h2 className="hero-service-title">Location</h2>
                  <div className="hero-service-name">{project.location}</div>
                </div>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button w-inline-block"
                >
                  <div className="button-box">
                    <img
                      src="/images/prev.svg"
                      loading="eager"
                      alt="Prev Icon"
                      className="button-icon"
                    />
                    <div className="button-text">Live preview</div>
                  </div>
                </a>
              )}
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

      {/* Case Study Detail Section */}
      <section className="work-detail-section section-spacing-bottom">
        <div className="inner-container-small">
          <div className="work-detail-info">
            <div className="work-detail-image">
              <img
                src={project.bannerImage}
                loading="lazy"
                alt={project.title}
                className="work-detail-banner"
              />
            </div>

            <div className="work-detail-rich-text w-richtext">
              {project.overview.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <p>Highlights:</p>
              <ul role="list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            {/* Gallery Images */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="w-dyn-list">
                <div role="list" className="work-gallery-list w-dyn-items">
                  {project.galleryImages.map((imgSrc, idx) => (
                    <div key={idx} role="listitem" className="w-dyn-item w-dyn-repeater-item">
                      <div className="work-gallery-image-wrap w-inline-block">
                        <img
                          src={imgSrc}
                          loading="lazy"
                          alt={`Gallery item ${idx + 1}`}
                          className="work-gallery-image"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Process / Narrative Text */}
            <div className="work-content-rich-text w-richtext">
              {project.processText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Testimonial / Client Feedback */}
            {project.testimonial && (
              <div className="client-feedback-wrap">
                <div className="client-feedback-rich-text w-richtext">
                  <h6>{project.testimonial.quote}</h6>
                </div>
                <div className="client-name">{project.testimonial.author}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="work-simple-section section-spacing-bottom">
        <div className="inner-container-small">
          <div className="section-title">
            <h2 className="work-simple-title">Recent work</h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="work-hero-list w-dyn-items">
              {recentProjects.map((rec) => (
                <div key={rec.slug} role="listitem" className="w-dyn-item">
                  <Link
                    to={`/work/${rec.slug}`}
                    className="work-hero-info w-inline-block"
                  >
                    <div className="work-content">
                      <div className="work-image-wrap">
                        <img
                          src={rec.bannerImage}
                          loading="lazy"
                          alt={rec.title}
                          className="work-image"
                        />
                        <div className="work-button-wrap">
                          <div className="work-button">
                            <div className="work-button-title">View project</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-layout-grid grid-work-info">
                        <div className="work-info-title">{rec.title}</div>
                        <div className="work-category">
                          <div className="category-dot"></div>
                          <div className="category-service">{rec.category}</div>
                        </div>
                      </div>
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
