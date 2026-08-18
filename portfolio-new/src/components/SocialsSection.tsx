import React from "react";
import { socialLinks } from "../data/siteData";

export const SocialsSection: React.FC = () => {
  const itemClasses = ["social-item-one", "social-item-two", "social-item-three", "social-item-four"];

  return (
    <section id="social" className="social-section section-spacing-bottom">
      <div className="inner-container-small">
        <div className="section-title award-text">
          <h2 className="social-main-title">Where I’m Active On</h2>
          <div role="text" className="type-text social-tag">
            My Internet Hangouts
          </div>
        </div>

        <div className="w-layout-grid grid-social">
          {socialLinks.map((social, index) => (
            <div key={social.id} className={itemClasses[index] || "social-item-one"}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-list w-inline-block"
              >
                <img
                  src={social.icon}
                  loading="lazy"
                  alt={`${social.name} Icon`}
                  className="social-icon"
                />
                <div className="social-info">
                  <div className="social-id">
                    <h3 className="social-id-title">{social.handle}</h3>
                    {social.verified && (
                      <img
                        src="/images/verify-badge.svg"
                        loading="lazy"
                        alt="Verified"
                        className="social-verify-icon"
                      />
                    )}
                  </div>
                  <div className="social-follower-title">{social.followers}</div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
