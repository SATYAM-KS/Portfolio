import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="inner-container-small">
        <div className="hero-content">
          <div className="w-layout-grid grid-hero-top">
            <Link to="/" className="hero-logo-wrap w-inline-block w--current">
              <img
                src={siteConfig.avatarMain}
                loading="lazy"
                alt={`${siteConfig.name} Avatar`}
                className="hero-logo one"
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

          <div className="hero-info-wrap">
            <div className="hero-content-center">
              <div className="badge">
                <div className="badge-dot">
                  <div className="badge-frame"></div>
                </div>
                <div className="badge-title">{siteConfig.status}</div>
              </div>
              <h1 className="hero-main-title">
                I’m {siteConfig.name}, a {siteConfig.title}.
              </h1>
              <p className="hero-description">{siteConfig.tagline}</p>
            </div>

            <div className="hero-button">
              <a
                href="#contact"
                onClick={scrollToContact}
                className="button w-inline-block"
              >
                <div className="button-box">
                  <img
                    src="/images/calendar.svg"
                    loading="eager"
                    alt="Calendar Icon"
                    className="button-icon"
                  />
                  <div className="button-text">Schedule a call</div>
                </div>
              </a>
            </div>
          </div>

          <div className="w-layout-grid grid-hero-image-item">
            <img
              src="/images/img1.webp"
              alt="Hero Showcase 1"
              className="hero-image one"
            />
            <div className="hero-video w-background-video w-background-video-atom">
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={siteConfig.heroVideo.poster}
                style={{
                  backgroundImage: `url("${siteConfig.heroVideo.poster}")`,
                  objectFit: "cover",
                  width: "100%",
                  height: "100%"
                }}
              >
                <source src={siteConfig.heroVideo.mp4} type="video/mp4" />
                <source src={siteConfig.heroVideo.webm} type="video/webm" />
              </video>
            </div>
            <img
              src="/images/img3.webp"
              loading="lazy"
              alt="Hero Showcase 2"
              className="hero-image two"
            />
            <img
              src="/images/img2.webp"
              loading="lazy"
              alt="Hero Showcase 3"
              className="hero-image three"
            />
          </div>

          <div className="divider-left"></div>
          <div className="divider-right"></div>
          <div className="hero-gradient-shadow"></div>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="inner-container">
          <div className="hero-shape">
            <div className="hero-shape-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
