import React from "react";
import { servicesData } from "../data/siteData";

export const ServicesSection: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById("contact");
    if (contactEl) contactEl.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="service-section section-spacing-bottom">
      <div id="service" className="offset-fix"></div>
      <div className="inner-container-small">
        <div className="section-title">
          <h2 className="service-main-title">How Can I Help?</h2>
        </div>

        <div className="service-list">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`service-item ${service.className}`}
            >
              <div className="w-layout-grid grid-service">
                <div className="service-title-wrap">
                  <img
                    src={service.icon}
                    loading="lazy"
                    alt={`${service.title} Icon`}
                    className="service-icon"
                  />
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <div className="service-info">
                  <div className="service-content">
                    <div className="service-description">{service.description}</div>
                    {service.items && (
                      <ul role="list" className="service-list-item">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="service-content-item">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="service-divider"></div>

                  <div className="service-tech">
                    <div className="service-tech-title">Tech Stack:</div>
                    <div className="service-stack-item">
                      {service.techStack.map((tech, idx) => (
                        <img
                          key={idx}
                          src={tech}
                          loading="lazy"
                          alt="Tech Logo"
                          className="service-stack-logo"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-small">
          <h4 className="cta-title">How Can I Help?</h4>
          <p className="cta-description">
            Need a developer who can bring your vision to life with clean code and smart solutions?
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="button-pricing w-inline-block"
          >
            <div className="button-pricing-box">
              <img
                src="/images/calendar-dark.svg"
                loading="eager"
                alt="Calendar Icon"
                className="button-icon"
              />
              <div className="button-pricing-text">Schedule a call</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
