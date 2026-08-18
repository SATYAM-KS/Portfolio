import React, { useState } from "react";
import { pricingPlans } from "../data/siteData";

export const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="pricing-section section-spacing-top">
      <div className="inner-container-small">
        <div className="section-title pricing-title-wrap">
          <h2 className="pricing-title">Let’s Talk Pricing</h2>
          <p className="pricing-description">
            Simple, transparent, and tailored to your project needs. Choose what works best for you.
          </p>
        </div>

        <div className="pricing-content">
          {/* Add-on Toggle */}
          <div
            className="pricing-toggle-item"
            onClick={() => setIsAnnual(!isAnnual)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setIsAnnual(!isAnnual)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            <div className="pricing-toggle-button">
              <div
                className="pricing-toggle-icon"
                style={{
                  transform: isAnnual ? "translate3d(24px, 0, 0)" : "translate3d(0px, 0, 0)"
                }}
              ></div>
            </div>
            <div className="pricing-toggle-title">Webflow Development</div>
            <div className="pricing-badge">
              <div className="pricing-badge-title">Add-on</div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="w-layout-grid grid-pricing">
            {/* Starter Plan */}
            <div className="pricing-item">
              <div className="pricing-top">
                <div className="pricing-dot"></div>
                <h3 className="pricing-top-title">{pricingPlans[0].name}</h3>
              </div>
              <div className="pricing-center">
                <div className="pricing-amount monthly" style={{ display: "flex" }}>
                  <h3 className="pricing-yearly">
                    ${isAnnual ? pricingPlans[0].annualPrice : pricingPlans[0].monthlyPrice}
                  </h3>
                  <div className="pricing-text">/mo</div>
                </div>
              </div>
              <ul role="list" className="pricing-list">
                <li className="pricing-list-item">{pricingPlans[0].projects}</li>
                <li className="pricing-list-item">{pricingPlans[0].pages}</li>
                <li className="pricing-list-item">{pricingPlans[0].responsive}</li>
                <li className="pricing-list-item">{pricingPlans[0].seo}</li>
                <li className="pricing-list-item">{pricingPlans[0].delivery}</li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="pricing-item text-linear">
              <div className="pricing-top">
                <div className="pricing-right-dot"></div>
                <h3 className="pricing-right-title">{pricingPlans[1].name}</h3>
              </div>
              <div className="pricing-center">
                <div className="pricing-amount monthly" style={{ display: "flex" }}>
                  <h3 className="pricing-right-yearly">
                    ${isAnnual ? pricingPlans[1].annualPrice : pricingPlans[1].monthlyPrice}
                  </h3>
                  <div className="pricing-right-text">/mo</div>
                </div>
              </div>
              <ul role="list" className="pricing-list">
                <li className="pricing-list-item text-black">{pricingPlans[1].projects}</li>
                <li className="pricing-list-item text-black">{pricingPlans[1].pages}</li>
                <li className="pricing-list-item text-black">{pricingPlans[1].responsive}</li>
                <li className="pricing-list-item text-black">{pricingPlans[1].seo}</li>
                <li className="pricing-list-item text-black">{pricingPlans[1].delivery}</li>
              </ul>
            </div>
          </div>

          <div className="pricing-button-wrap">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="button-white w-inline-block"
            >
              <div className="button-white-box">
                <img
                  src="/images/calendar-dark.svg"
                  loading="eager"
                  alt="Calendar Icon"
                  className="button-icon"
                />
                <div className="button-pricing-text">Get started</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
