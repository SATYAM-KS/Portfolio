import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <footer className="footer">
      <div id="contact" className="footer-offset-fix"></div>
      <div className="footer-decoration">
        <div className="inner-container">
          <div className="footer-shape">
            <div className="footer-shape-inner"></div>
          </div>
        </div>
      </div>

      <div className="inner-container-small">
        <div id="footer-content" className="footer-content">
          <div className="footer-about-info">
            <div className="footer-about-avatar">
              <img
                src={siteConfig.avatarSecondary}
                loading="lazy"
                alt={`${siteConfig.name} Profile`}
                className="footer-avatar-image"
              />
            </div>

            <div className="footer-about-title-wrap">
              <h2 className="footer-about-title">Get in touch</h2>
              <p className="footer-about-description">
                Fill out the form, or reach out directly. I’ll respond within 24 hours.
              </p>
            </div>

            <div id="footer-form" className="footer-form-wrap w-form">
              {isSubmitted ? (
                <div className="success-message w-form-done" style={{ display: "block" }}>
                  <div className="success-message-title">
                    Your form has been submitted successfully. Thank you!
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="footer-form">
                  <div className="label">
                    <label htmlFor="fullname" className="field-title">
                      Name*
                    </label>
                    <input
                      className="form-input footer-input w-input"
                      maxLength={256}
                      name="fullname"
                      placeholder="Your full name"
                      type="text"
                      id="fullname"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="label">
                    <label htmlFor="email" className="field-title">
                      Email*
                    </label>
                    <input
                      className="form-input footer-input w-input"
                      maxLength={256}
                      name="Email"
                      placeholder="Your email address"
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="label">
                    <label htmlFor="message" className="field-title">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="Message"
                      maxLength={5000}
                      placeholder="Your message"
                      className="form-input form-textarea footer-textarea w-input"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <input
                    type="submit"
                    disabled={isSubmitting}
                    className="footer-button w-button"
                    value={isSubmitting ? "Please wait..." : "Submit"}
                  />
                </form>
              )}
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-contact-info">
            <div className="footer-contact-title">Or, let’s discuss</div>
            <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, "")}`} className="footer-contact-number">
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="contact-copy-mail w-inline-block">
              <h3 className="contact-mail-title">{siteConfig.contact.email}</h3>
            </a>
            <div className="footer-link-item">
              <Link to="/utility/licenses" className="footer-link">
                Licenses
              </Link>
              <Link to="/utility/changelog" className="footer-link">
                Changelog
              </Link>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="w-layout-grid footer-copyright-info">
            <div className="footer-copyright-wrap">
              <div className="footer-copyright-content">
                <div className="footer-copyright-title">Created by</div>
                <div className="footer-copyright-link-wrap w-inline-block" style={{ color: "#fff", fontWeight: 500 }}>
                  <img
                    src="/images/wbs-20logo.svg"
                    loading="lazy"
                    alt="Logo"
                    className="footer-copyright-icon"
                  />
                  <div className="footer-copyright-name">Webestica</div>
                </div>
              </div>
              <p className="footer-copyright">
                Powered by <span className="copyright-link" style={{ color: "#fff" }}>React &amp; Vite</span>
              </p>
            </div>
            <img
              src="/images/barcode.svg"
              loading="lazy"
              alt="Barcode"
              className="footer-barcode"
            />
          </div>

          <div className="footer-divider-left"></div>
          <div className="footer-divider-right"></div>
          <div className="footer-gradient-shadow"></div>
          <img
            src="/images/shape.svg"
            loading="lazy"
            alt="Footer Shape"
            className="footer-shape-image"
          />
        </div>
      </div>
    </footer>
  );
};
