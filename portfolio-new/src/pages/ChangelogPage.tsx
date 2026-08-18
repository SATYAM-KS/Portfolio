import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export const ChangelogPage: React.FC = () => {
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
              <h1 className="hero-inner-title">Changelog</h1>
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

      <div className="style-guide-section">
        <div className="container-small">
          <div className="style-guide-box">
            <div className="style-guide-header">
              <h2 className="style-guide-title">V.1.0.0</h2>
            </div>
            <div className="style-guide-content">
              <div>
                <h3 className="heading-h6">Initial Release - React + Vite Portfolio App.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
