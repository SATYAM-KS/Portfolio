import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export const LicensesPage: React.FC = () => {
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
                <h1 className="hero-inner-title">Licenses</h1>
                <p className="hero-inner-description">
                  All graphical assets in this template are licensed for personal and commercial use. If you&#x27;d like to use a specific asset, please check the license below.
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

      <div className="style-guide-section">
        <div className="container-small">
          <div className="style-guide-wrapper">
            <div className="style-guide-box">
              <div className="style-guide-header">
                <h2 className="style-guide-title">Photography</h2>
              </div>
              <div className="style-guide-content">
                <p>
                  All images in this template are sourced from Pexels and Freepik and are free for commercial use. Check out the license for{" "}
                  <a href="https://www.pexels.com/license/" target="_blank" rel="noreferrer">
                    Pexels here
                  </a>{" "}
                  and{" "}
                  <a href="https://www.freepikcompany.com/legal" target="_blank" rel="noreferrer">
                    Freepik here
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="style-guide-wrapper">
            <div className="style-guide-box">
              <div className="style-guide-header">
                <h2 className="style-guide-title">Icons</h2>
              </div>
              <div className="style-guide-content">
                <p>
                  All Icons in this template are sourced from Iconstica and Flaticon icons. Check out the license for{" "}
                  <a href="https://www.iconstica.com/" target="_blank" rel="noreferrer">
                    Iconstica here
                  </a>{" "}
                  and{" "}
                  <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer">
                    Flaticon here
                  </a>.
                </p>
              </div>
            </div>
          </div>

          <div className="style-guide-wrapper">
            <div className="style-guide-box">
              <div className="style-guide-header">
                <h2 className="style-guide-title">Fonts</h2>
              </div>
              <div className="style-guide-content">
                <p>
                  All fonts used in this template are available to use freely under the Google fonts license. Check out the license for{" "}
                  <a href="https://fonts.google.com/specimen/Archivo/license" target="_blank" rel="noreferrer">
                    Archivo fonts license
                  </a>,{" "}
                  <a href="https://fonts.google.com/specimen/Covered+By+Your+Grace/license" target="_blank" rel="noreferrer">
                    Covered By Your Grace fonts license
                  </a>, and{" "}
                  <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noreferrer">
                    Inter fonts license
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
