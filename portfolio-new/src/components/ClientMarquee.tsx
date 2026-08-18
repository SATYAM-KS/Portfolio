import React from "react";
import { clientLogos } from "../data/siteData";

export const ClientMarquee: React.FC = () => {
  return (
    <section className="client-section section-spacing-top">
      <div id="client" className="offset-fix"></div>
      <div className="inner-container-small">
        <div className="section-title">
          <div className="client-title">Collaborated with industry rockstars:</div>
        </div>
        <div className="client-marquee marquee-container">
          <div className="client-blur-left"></div>
          <div className="marquee-track">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                loading="lazy"
                alt={`Client Logo ${index + 1}`}
                className="client-image"
                style={{ margin: "0 24px" }}
              />
            ))}
          </div>
          <div className="client-blur-right"></div>
        </div>
      </div>
    </section>
  );
};
