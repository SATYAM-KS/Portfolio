import React from "react";
import { reviewsData } from "../data/siteData";

export const ReviewsSection: React.FC = () => {
  const avatarStack = [
    "/images/avata3.webp",
    "/images/avatar-1.webp",
    "/images/avatar-2.webp",
    "/images/avatar-4.webp"
  ];

  return (
    <section id="review" className="review-section">
      <div className="inner-container-small">
        <div className="section-title">
          <div className="w-layout-grid grid-review">
            <h2 className="review-title">Reviews That Speak Volumes</h2>
            <div className="review-count">
              <div className="avatar-items">
                {avatarStack.map((src, index) => (
                  <div key={index} className="avatar-image-wrap">
                    <img
                      src={src}
                      alt="Avatar"
                      loading="lazy"
                      className={`avatar-image ${["one", "two", "three", "four"][index]}`}
                    />
                  </div>
                ))}
              </div>
              <div className="review-count-title">
                Trusted by <span className="text-white">10K </span>users worldwide
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-marquee-list marquee-container">
        <div className="review-blur-left"></div>

        {/* Marquee Row 1 */}
        <div className="marquee-track" style={{ animationDuration: "40s", marginBottom: "16px" }}>
          {reviewsData.concat(reviewsData).map((review, index) => (
            <div
              key={`row1-${index}`}
              className="review-marquee-content"
              style={{ minWidth: "340px", margin: "0 12px" }}
            >
              <img
                src={review.avatar}
                loading="lazy"
                alt={review.name}
                className="review-avatar-image"
              />
              <div className="review-info">
                <div className="review-client-info">
                  <div className="review-client-name-wrap">
                    <div className="review-client-name">{review.name}</div>
                    <div className="review-dot">.</div>
                    <div className="review-tag">{review.handle}</div>
                  </div>
                  <a
                    href="https://www.x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-client-icon-wrap w-inline-block"
                  >
                    <img
                      src="/images/27b656681334a97f1f68979083bda707_x.svg"
                      loading="lazy"
                      alt="Social Icon"
                      className="review-client-icon"
                    />
                  </a>
                </div>
                <p className="review-description">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="marquee-track-reverse" style={{ animationDuration: "45s" }}>
          {reviewsData.slice().reverse().concat(reviewsData.slice().reverse()).map((review, index) => (
            <div
              key={`row2-${index}`}
              className="review-marquee-content"
              style={{ minWidth: "340px", margin: "0 12px" }}
            >
              <img
                src={review.avatar}
                loading="lazy"
                alt={review.name}
                className="review-avatar-image"
              />
              <div className="review-info">
                <div className="review-client-info">
                  <div className="review-client-name-wrap">
                    <div className="review-client-name">{review.name}</div>
                    <div className="review-dot">.</div>
                    <div className="review-tag">{review.handle}</div>
                  </div>
                  <a
                    href="https://www.x.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="review-client-icon-wrap w-inline-block"
                  >
                    <img
                      src="/images/27b656681334a97f1f68979083bda707_x.svg"
                      loading="lazy"
                      alt="Social Icon"
                      className="review-client-icon"
                    />
                  </a>
                </div>
                <p className="review-description">{review.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="review-blur-right"></div>
      </div>
    </section>
  );
};
