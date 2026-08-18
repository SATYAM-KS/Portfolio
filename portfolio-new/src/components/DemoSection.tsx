import React from "react";
import { Link } from "react-router-dom";
import { workingOnItems } from "../data/siteData";

export const DemoSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
  };

  const marqueeImagesLeft = [
    "/images/marquee-1.webp",
    "/images/marquee-2.webp",
    "/images/marquee-3.webp",
    "/images/marquee-4.webp",
    "/images/marquee-1.webp",
    "/images/marquee-2.webp",
    "/images/marquee-3.webp",
    "/images/marquee-4.webp"
  ];

  const marqueeImagesRight = [
    "/images/marquee-7.webp",
    "/images/marquee-5.webp",
    "/images/marquee-8.webp",
    "/images/marquee-6.webp",
    "/images/marquee-7.webp",
    "/images/marquee-5.webp",
    "/images/marquee-8.webp",
    "/images/marquee-6.webp"
  ];

  const itemClasses = ["one", "two", "three", "four", "five", "six"];

  return (
    <section id="demo" className="demo-section section-spacing-bottom">
      <div className="inner-container-small">
        <div className="w-layout-grid grid-demo">
          {/* Left Column: Project Count & Image Marquee */}
          <div className="demo-left">
            <div className="demo-title-wrap">
              <h2 className="demo-title">
                28<span className="text-primary">+</span>
              </h2>
              <p className="demo-description">Projects built &amp; deployed with care</p>
            </div>

            <div className="demo-marquee">
              <Link to="/work" className="demo-marquee-item w-inline-block">
                <div className="demo-marquee-left">
                  {marqueeImagesLeft.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      loading="lazy"
                      alt="Marquee Item"
                      className="marquee-image"
                    />
                  ))}
                </div>
              </Link>
              <Link to="/work" className="demo-marquee-item w-inline-block">
                <div className="demo-marquee-right">
                  {marqueeImagesRight.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      loading="lazy"
                      alt="Marquee Item"
                      className="marquee-image"
                    />
                  ))}
                </div>
              </Link>
            </div>
          </div>

          {/* Right Column: Intro Call */}
          <div className="demo-right">
            <h3 className="demo-right-title">Book a 30 min intro call</h3>
            <div className="demo-divider"></div>
            <div className="demo-right-content">
              <div className="demo-text">What happens in 30 mins:</div>
              <div className="demo-list">
                <div className="demo-list-item">
                  <div className="demo-icon-wrap">
                    <img
                      src="/images/check.svg"
                      loading="lazy"
                      alt="Check Icon"
                      className="demo-icon"
                    />
                  </div>
                  <div className="demo-list-title">Short intro</div>
                </div>
                <div className="demo-list-item">
                  <div className="demo-icon-wrap">
                    <img
                      src="/images/check.svg"
                      loading="lazy"
                      alt="Check Icon"
                      className="demo-icon"
                    />
                  </div>
                  <div className="demo-list-title">Dig into your project goals</div>
                </div>
                <div className="demo-list-item">
                  <div className="demo-icon-wrap">
                    <img
                      src="/images/check.svg"
                      loading="lazy"
                      alt="Check Icon"
                      className="demo-icon"
                    />
                  </div>
                  <div className="demo-list-title">Clear action plan</div>
                </div>
              </div>

              <div className="demo-button">
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
          </div>
        </div>

        {/* Bottom Section: Currently Working On */}
        <div className="demo-bottom-list">
          <h4 className="demo-bottom-title">Currently Working On:</h4>
          <div className="w-layout-grid grid-demo-bottom">
            {workingOnItems.map((item, index) => (
              <div key={index} className={`demo-item ${itemClasses[index] || "one"}`}>
                <div className="demo-bottom-item">
                  <div className="demo-bottom-icon-wrap">
                    <img
                      src="/images/right-arrow.svg"
                      loading="lazy"
                      alt="Right arrow icon"
                      className="demo-bottom-icon"
                    />
                  </div>
                  <div className="demo-bottom-list-title">{item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
