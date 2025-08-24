"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "60px 15px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Full-width Heading */}
        <div style={{ marginBottom: "40px" }}>
          <h1 className="about-heading-line1">88+ Years of</h1>
          <h1 className="about-heading-line2">
            Innovation <span style={{ color: "black" }}>and </span> Impact
          </h1>
        </div>

        {/* Two-column layout */}
        <div
          className="d-flex flex-column flex-md-row"
          style={{ gap: "30px", alignItems: "stretch" }} // Make both columns same height
        >
          {/* Left column */}
          <div style={{ flex: 1 }}>
            <h4 className="about-subheading">The Force That</h4>
            <h4 className="about-subheading">Inspires Tomorrow</h4>
            <p className="about-paragraph">
              At CG, we don’t just manufacture products; we engineer progress.
              CG, headquartered in Mumbai, is a pioneering name in engineering
              with a legacy spanning over 88 years. CG has been the quiet force
              driving the growth and transformation of everyday lives with more
              efficient engineering solutions for the world.
            </p>
            <p className="about-paragraph">
              As a leading engineering conglomerate, we have evolved from a
              trailblazing Indian enterprise into a global force. With 18
              world-class manufacturing units and a workforce of over 7,000
              skilled professionals, we design and deliver high-performance
              engineering solutions that are built to thrive in the most
              demanding conditions globally.
            </p>
          </div>

          {/* Right column - Image with full overlay */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                height: "100%", // Match parent height
                minHeight: "300px", // Ensures it doesn't collapse on small screens
              }}
            >
              <Image
                src="/scene.jpg"
                alt="About CG"
                fill
                style={{
                  objectFit: "cover", // Fills container
                  borderRadius: "20px",
                }}
                priority
              />
              {/* Full overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)", // 40% opacity
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: "700",
                  fontSize: "clamp(28px, 5vw, 48px)",
                  lineHeight: "100%",
                  letterSpacing: "0px",
                  textAlign: "center",
                }}
              >
                videoplaceholder
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .about-heading-line1 {
          font-family: Helvetica, sans-serif;
          font-weight: 400;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 110%;
          color: #4d4d4d;
          margin: 0;
        }
        .about-heading-line2 {
          font-family: Helvetica, sans-serif;
          font-weight: 700;
          font-size: clamp(32px, 5vw, 64px);
          line-height: 110%;
          color: #005bac;
          margin-top: 10px;
        }
        .about-subheading {
          font-family: Helvetica, sans-serif;
          font-weight: 700;
          font-size: clamp(28px, 4vw, 48px);
          line-height: 120%;
          letter-spacing: 0.5px;
          color: #333;
        }
        .about-paragraph {
          font-family: Helvetica, sans-serif;
          font-weight: 400;
          font-size: 16px;
          line-height: 140%;
          letter-spacing: 0.5px;
          color: #6c757d;
          text-align: justify;
          margin-bottom: 15px;
        }

        @media (max-width: 576px) {
          .about-heading-line1,
          .about-heading-line2,
          .about-subheading {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
