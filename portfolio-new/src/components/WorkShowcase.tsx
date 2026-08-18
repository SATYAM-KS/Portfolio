import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export const WorkShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="work-section section-spacing-top">
      <div id="work" className="offset-fix"></div>
      <div className="container-small">
        <div className="grid-work">
          <h2 className="grid-title">Work Showcase</h2>
        </div>

        <div className="work-slider">
          <div className="work-slider-item w-slider">
            <div className="work-mask w-slider-mask">
              <div className="work-slider-wrapper">
                <div
                  className="work-slider-track"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"
                  }}
                >
                  {projectsData.map((project) => (
                    <div key={project.slug} className="work-slide-item">
                      <div className="work-item">
                        <Link
                          to={`/work/${project.slug}`}
                          className="work-info w-inline-block"
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
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="slider-arrow left w-slider-arrow-left"
              style={{ background: "transparent", border: "none" }}
              aria-label="Previous Slide"
            >
              <img
                src="/images/left-arrow.svg"
                loading="lazy"
                alt="Left Arrow"
                className="left-arrow-icon"
              />
            </button>
            <button
              onClick={nextSlide}
              className="slider-arrow right w-slider-arrow-right"
              style={{ background: "transparent", border: "none" }}
              aria-label="Next Slide"
            >
              <img
                src="/images/right-arrow-light.svg"
                loading="lazy"
                alt="Right Arrow"
                className="right-arrow-icon"
              />
            </button>

            {/* Slider Dots */}
            <div className="slide-nav w-slider-nav w-round">
              {projectsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-slider-dot ${currentIndex === index ? "w-active" : ""}`}
                  style={{ cursor: "pointer", border: "none" }}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
