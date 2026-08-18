import React from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { siteConfig } from "../data/siteData";

export const WorkPage: React.FC = () => {
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
              <div className="hero-inner-main">
                <h1 className="hero-inner-title">Our work</h1>
                <p className="hero-inner-description">
                  A showcase of our latest design and development projects—crafted for impact and built to perform.
                </p>
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

      <section className="work-hero-section section-spacing-bottom">
        <div className="inner-container-small">
          <div className="w-dyn-list">
            <div role="list" className="work-hero-list w-dyn-items">
              {projectsData.map((project) => (
                <div key={project.slug} role="listitem" className="w-dyn-item">
                  <Link
                    to={`/work/${project.slug}`}
                    className="work-hero-info w-inline-block"
                  >
                    <div className="work-content">
                      <div className="work-image-wrap">
                        <img
                          src={project.bannerImage}
                          loading="lazy"
                          alt={project.title}
                          className="work-image"
                        />
                        <div className="work-button-wrap">
                          <div className="work-button">
                            <div className="work-button-title">View project</div>
                          </div>
                        </div>
                      </div>

                      <div className="w-layout-grid grid-work-info">
                        <div className="work-info-title">{project.title}</div>
                        <div className="work-category">
                          <div className="category-dot"></div>
                          <div className="category-service">{project.category}</div>
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
