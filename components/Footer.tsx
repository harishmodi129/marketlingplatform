"use client";

import React, { useState } from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  // State to toggle dropdowns
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Footer links
  const companyLinks = [
    "Company Overview",
    "Leadership & Top Management",
    "Subsidiaries & Joint Ventures",
    "Our Purpose & Values",
    "Sectors We Serve",
    "ESG",
    "Technology + R&D",
  ];

  const solutionsLinks = [
    "Transformers",
    "Switchgears",
    "Motors",
    "Drives & Automation",
    "Railways",
    "Consumer Durables",
  ];

  const resourcesLinks = [
    "Contact Us",
    "Case Studies",
    "Investors",
    "Policies",
    "CG in the News",
    "Disclaimer",
  ];

  // Utility for mobile toggle
  const renderLinks = (section: string, links: string[]) => (
    <ul
      className={`list-unstyled mb-0 mt-2 ${
        openSection === section ? "d-block" : "d-none d-md-block"
      }`}
    >
      {links.map((item, idx) => (
        <li key={idx} className="mb-2">
          <a href="#" className="text-muted text-decoration-none small">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="bg-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Company Info */}
          <div className="col-lg-4 col-md-6 col-12 pe-lg-5">
            <Image
              src="/logo.png"
              alt="logo"
              width={320}
              height={50}
              className="mb-3 img-fluid"
            />

            <div className="d-flex align-items-start mb-3">
              <Image
                src="/address.png"
                alt="Address"
                width={20}
                height={20}
                className="me-2 mt-1 flex-shrink-0"
              />
              <p
                className="text-muted mb-0"
                style={{ fontSize: "14px", textAlign: "start" }}
              >
                CG Power and Industrial Solutions Limited <br />
                10th Floor, CG House, Dr Annie Besant Road, <br />
                Worli, Mumbai - 400030.
              </p>
            </div>

            <div className="d-flex align-items-center mb-3">
              <Image
                src="/email.png"
                alt="Email"
                width={20}
                height={20}
                className="me-2"
              />
              <a
                href="mailto:help@cgglobal.com"
                className="text-decoration-none text-muted"
                style={{ fontSize: "14px" }}
              >
                help@cgglobal.com
              </a>
            </div>

            <h6 className="text-primary fw-bold">Our Parent Companies:</h6>
            <div className="d-flex flex-wrap align-items-center gap-3 mt-2">
              <Image
                src="/imagecompany.png"
                alt="Murugappa"
                width={100}
                height={40}
                className="img-fluid"
              />
              <Image
                src="/india.png"
                alt="TI India"
                width={100}
                height={40}
                className="img-fluid"
              />
            </div>
          </div>

          {/* Company Links */}
          <div className="col-lg-3 col-md-6 col-6 ps-lg-4">
            <h6
              className="text-primary fw-bold mb-3 d-flex justify-content-between align-items-center"
              onClick={() => toggleSection("company")}
              style={{ cursor: "pointer" }}
            >
              Company
              <span className="d-md-none">
                {openSection === "company" ? "−" : "+"}
              </span>
            </h6>
            {renderLinks("company", companyLinks)}
          </div>

          {/* Solutions Links */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6
              className="text-primary fw-bold mb-3 d-flex justify-content-between align-items-center"
              onClick={() => toggleSection("solutions")}
              style={{ cursor: "pointer" }}
            >
              Solutions
              <span className="d-md-none">
                {openSection === "solutions" ? "−" : "+"}
              </span>
            </h6>
            {renderLinks("solutions", solutionsLinks)}
          </div>

          {/* Resources Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6
              className="text-primary fw-bold mb-3 d-flex justify-content-between align-items-center"
              onClick={() => toggleSection("resources")}
              style={{ cursor: "pointer" }}
            >
              Resources
              <span className="d-md-none">
                {openSection === "resources" ? "−" : "+"}
              </span>
            </h6>
            {renderLinks("resources", resourcesLinks)}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mb-4">
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <a href="#" className="text-decoration-none">
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a href="#" className="text-decoration-none">
              <Image src="/youtube.png" alt="YouTube" width={24} height={24} />
            </a>
            <a href="#" className="text-decoration-none">
              <Image src="/Vector.png" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#" className="text-decoration-none">
              <Image
                src="/instagra.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="text-white text-center py-3"
        style={{ backgroundColor: "#005cab" }}
      >
        <small>
          Copyright © 2025, CG Power and Industrial Solutions Ltd. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
