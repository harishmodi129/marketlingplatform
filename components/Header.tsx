"use client";

import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <div className={`header-wrapper ${className || ""}`}>
      {/* Background Image */}
      <div className="relative" style={{ height: "300px" }}>
        <Image
          src="/image.png"
          alt="background image"
          fill
          className="object-cover"
        />
      </div>

      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg custom-navbar shadow"
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "90%",
          maxWidth: "1400px", // keeps nav centered on very wide screens
          height: "66px",
          borderRadius: "60px",
          backgroundColor: "#ffffff",
          zIndex: 9999,
        }}
      >
        <div className="container p-0">
          {/* Brand Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <Image src="/company.png" alt="logo" width={185} height={36} />
          </a>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Business Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Consumer Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">
                  Careers
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <Image src="/search.png" width={30} height={30} alt="search" />
              </li>
              <li className="nav-item ms-2">
                <a
                  href="/contact"
                  className="btn btn-primary rounded-pill px-3 py-2"
                  style={{ backgroundColor: "#005CAB", border: "none" }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          nav.custom-navbar {
            width: calc(100% - 20px) !important;
            border-radius: 30px !important;
          }

          .navbar-nav {
            text-align: center;
          }

          .navbar-nav .nav-item {
            margin-bottom: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
