import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section section-spacing">
      <div className="inner-container-small">
        <div className="about-content">
          <div className="about-top">
            <div className="about-top-content">
              <div className="about-image-wrap">
                <img
                  src={siteConfig.avatarSecondary}
                  loading="lazy"
                  alt={`${siteConfig.name} Profile`}
                  className="about-image"
                />
              </div>
              <div className="about-experience-info">
                <h2 className="about-title">{siteConfig.experienceYears}</h2>
                <div className="about-description">{siteConfig.experienceLabel}</div>
              </div>
            </div>
            <div role="text" className="type-text">
              Call me just &quot;{siteConfig.nickname}&quot;
            </div>
          </div>

          <h2 className="about-main-description">
            I&#x27;m a full-stack developer who builds seamless web applications, from front-end design to back-end solutions. Check out{" "}
            <Link to="/work" className="about-link">
              my work
            </Link>{" "}
            to see what I’ve created. If you&#x27;re looking for someone who can handle both ends of the stack, I’ve got you covered.
          </h2>

          <img
            src={siteConfig.signatureImage}
            loading="lazy"
            alt="Signature"
            className="about-sign"
          />
        </div>
      </div>
    </section>
  );
};
