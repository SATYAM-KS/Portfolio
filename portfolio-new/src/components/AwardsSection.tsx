import React from "react";
import { awardsData } from "../data/siteData";

export const AwardsSection: React.FC = () => {
  const itemClasses = ["one", "two", "three", "four"];
  const dividerClasses = ["one", "two", "three"];

  return (
    <section id="award" className="award-section section-spacing-bottom">
      <div className="inner-container-small">
        <div className="section-title award-text">
          <h2 className="award-main-title">My Proud Moments</h2>
          <div role="text" className="type-text award-tag">
            The “I made this” moments
          </div>
        </div>

        <div className="award-content">
          {awardsData.map((award, index) => (
            <React.Fragment key={index}>
              <div className={`award-item-wrap ${itemClasses[index] || "one"}`}>
                <div className="w-layout-grid award-item">
                  <img
                    src={award.clientIcon}
                    loading="lazy"
                    alt="Client Icon"
                    className="client-image"
                  />
                  <h3 className="award-title">{award.title}</h3>
                  <div className="award-counter">{award.counter}</div>
                  <img
                    src={award.awardImage}
                    loading="lazy"
                    alt={award.title}
                    className="award-image"
                  />
                </div>
              </div>
              {index < awardsData.length - 1 && (
                <div className={`award-divider ${dividerClasses[index] || "one"}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
