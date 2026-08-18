import React, { useState } from "react";
import { timelineData } from "../data/siteData";

export const TimelineSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // In collapsed mode, we show first 2 items, or restrict height
  const visibleItems = isExpanded ? timelineData : timelineData.slice(0, 2);

  return (
    <section id="timeline" className="timeline-section section-spacing-bottom">
      <div className="inner-container-small">
        <div className="w-layout-grid grid-timeline">
          <h2 className="timeline-main-title">Career Timeline</h2>
          <div className="timeline-text">@2014 - Present</div>
        </div>

        <div className="timeline-content" style={{ height: "auto" }}>
          {visibleItems.map((item, index) => (
            <div key={index} className="w-layout-grid grid-timeline-info">
              <div className="timeline-year">
                <div className="timeline-year-title">{item.period}</div>
              </div>
              <div className="timeline-dots-wrap">
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-detail">
                <img
                  src={item.icon}
                  loading="lazy"
                  alt={`${item.role} Icon`}
                  className="timeline-logo"
                />
                <h3 className="timeline-title">{item.role}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}

          <div className="w-layout-grid grid-timeline-info-copy">
            <div className="empty-space"></div>
            <div className="timeline-dots-wrap">
              <div className="timeline-dot"></div>
            </div>
            <div
              className="timeline-dropdown"
              onClick={() => setIsExpanded(!isExpanded)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setIsExpanded(!isExpanded)}
            >
              <div className="timeline-frame">
                <img
                  src="/images/dropdown.svg"
                  alt="Dropdown Icon"
                  loading="lazy"
                  className="timeline-frame-logo"
                  style={{
                    transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}
                />
              </div>
              <div className="timeline-frame-text-wrap">
                <div className="timeline-frame-text">
                  {isExpanded ? "Show less" : "Show all"}
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-divider"></div>
        </div>
      </div>
    </section>
  );
};
