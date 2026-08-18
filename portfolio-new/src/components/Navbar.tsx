import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollTo = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div role="banner" className="navbar w-nav">
      <div className="navbar-menu">
        {/* Home */}
        <button
          onClick={() => handleScrollTo("hero")}
          className="navbar-item w-inline-block"
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="Home"
        >
          <div className={`navbar-icon-wrap ${location.pathname === "/" && !location.hash ? "navbar-current" : ""}`}>
            <img
              src="/images/85d8a7f6597509205d2072e8c76bdc34_icon-1.svg"
              loading="lazy"
              alt="Home Icon"
              className="navbar-icon"
            />
          </div>
          <div className="navbar-tooltip">
            <div className="navbar-tooltip-title">Home</div>
          </div>
        </button>

        {/* Work */}
        <Link
          to="/work"
          className="navbar-item w-inline-block"
          aria-label="Work"
        >
          <div className={`navbar-icon-wrap ${location.pathname.startsWith("/work") ? "navbar-current" : ""}`}>
            <img
              src="/images/24d40fc4e5e86ca1813219d9622baf30_icon-2.svg"
              loading="lazy"
              alt="Work Icon"
              className="navbar-icon"
            />
          </div>
          <div className="navbar-tooltip">
            <div className="navbar-tooltip-title">Work</div>
          </div>
        </Link>

        {/* About */}
        <button
          onClick={() => handleScrollTo("about")}
          className="navbar-item w-inline-block"
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="About"
        >
          <div className="navbar-icon-wrap">
            <img
              src="/images/bf9594b0adccb87f14b9c194da9f6143_icon-3.svg"
              loading="lazy"
              alt="About Icon"
              className="navbar-icon"
            />
          </div>
          <div className="navbar-tooltip">
            <div className="navbar-tooltip-title">About</div>
          </div>
        </button>

        {/* Pricing */}
        <button
          onClick={() => handleScrollTo("pricing")}
          className="navbar-item w-inline-block"
          style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="Pricing"
        >
          <div className="navbar-icon-wrap">
            <img
              src="/images/df25375d07ee58acfc59edff6ecf902b_icon-4.svg"
              loading="lazy"
              alt="Pricing Icon"
              className="navbar-icon"
            />
          </div>
          <div className="navbar-tooltip">
            <div className="navbar-tooltip-title">Pricing</div>
          </div>
        </button>

        {/* Blog */}
        <Link
          to="/blog"
          className="navbar-item w-inline-block"
          aria-label="Blog"
        >
          <div className={`navbar-icon-wrap ${location.pathname.startsWith("/blog") ? "navbar-current" : ""}`}>
            <img
              src="/images/115825f4c66d73db13690e008a220d4f_icon-5.svg"
              loading="lazy"
              alt="Blog Icon"
              className="navbar-icon"
            />
          </div>
          <div className="navbar-tooltip">
            <div className="navbar-tooltip-title">Blog</div>
          </div>
        </Link>

        <div className="navbar-divider"></div>

        {/* Book a Call */}
        <a
          href="https://cal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-item w-inline-block"
          aria-label="Book a call"
        >
          <div className="navbar-icon-wrap navbar-current">
            <img
              src="/images/4f4c25828d90e2ded473d4d415791f5a_icon-6.svg"
              loading="lazy"
              alt="Calendar Icon"
              className="navbar-icon"
            />
          </div>
          <div className="navbar-tooltip">
            <div className="navbar-tooltip-title">Book a call</div>
          </div>
        </a>
      </div>
    </div>
  );
};
