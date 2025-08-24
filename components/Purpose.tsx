"use client";
import Image from "next/image";
import React from "react";

const Purpose = () => {
  return (
    <section
      className="purpose-section"
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "60px 15px",
      }}
    >
      {/* Section Title */}
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2 className="fw-bold text-center text-md-start">
          <span className="our-text">our</span>{" "}
          <span className="purpose-text">purpose</span>
        </h2>

        <p className="custom-text text-center text-md-start">
          Transforming your needs into smart solutions <br /> for an enhanced
          quality of life.
        </p>

        <p className="text-muted mt-1 text-center text-md-start">
          At CG, our purpose is to transform your needs into smart solutions
          that enhance everyday life. Guided by our EDGE operating rhythm and
          core values, we drive performance, foster innovation, and build a
          culture rooted in respect, ownership, and customer centricity.
        </p>
      </div>

      {/* Word From Leaders */}
      <h3
        className="fw-bold mb-4 custom-text text-center text-md-start"
        style={{ maxWidth: "1200px", margin: "80px auto 16px auto" }}
      >
        Word From Our Leaders
      </h3>

      {/* Card Section with background image */}
      <div style={{ position: "relative" }}>
        {/* Background image behind cards */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "50%",
            backgroundImage: "url('/background.png')",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#005CAB",
            backgroundBlendMode: "multiply",
            zIndex: 0,
          }}
        />

        <div
          className="row g-4 d-flex"
          style={{ position: "relative", zIndex: 1, marginTop: "2rem" }}
        >
          {/* CEO Card */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="position-relative text-center flex-fill purpose-card"
              style={{
                border: "4px solid #005CAB",
                borderRadius: "50px",
                boxShadow: "0px 8px 10px 0px #00000040",
                paddingTop: "160px",
                paddingBottom: "20px",
                backgroundColor: "#fff",
                marginTop: "100px",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <div
                className="position-absolute top-0 start-50"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <Image
                  src="/persontwo.png"
                  alt="CEO & MD"
                  width={280}
                  height={280}
                  className="rounded-circle border-3 border-white"
                />
              </div>
              <h5 className="fw-bold text-black mb-3">
                Message from CEO and the MD
              </h5>
              <p className="text-muted text-start px-3">
                Post the acquisition by TII in 2020, we have undertaken a
                focused transformation, restoring CG’s legacy of engineering
                excellence while building a foundation for sustainable and
                scalable growth. CG has always stood at the intersection of
                innovation, capability, and trust. With operations spanning
                three core sectors, Power, Industrial and Railways, the company
                is uniquely positioned to contribute to {"India's"} evolving
                economic ambitions. As the nation accelerates its journey toward
                self-reliance and global competitiveness, CG is ready to play a
                defining role in making India a manufacturing powerhouse for the
                world. In a time of disruption and reinvention, our goal is not
                merely to grow, but to lead - responsibly, strategically, and
                with a long-term vision.
              </p>
              <p className="fw-bold text-primary mt-3 mb-0">Amar Kaul</p>
            </div>
          </div>

          {/* Chairman Card */}
          <div className="col-md-6 d-flex justify-content-center">
            <div
              className="position-relative text-center flex-fill purpose-card"
              style={{
                border: "4px solid #005CAB",
                borderRadius: "50px",
                boxShadow: "0px 8px 10px 0px #00000040",
                paddingTop: "160px",
                paddingBottom: "20px",
                backgroundColor: "#fff",
                marginTop: "100px",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <div
                className="position-absolute top-0 start-50"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <Image
                  src="/personone.png"
                  alt="Chairman"
                  width={280}
                  height={280}
                  className="rounded-circle border-3 border-white"
                />
              </div>
              <h5 className="fw-bold text-black mb-3">
                Message from the Chairman
              </h5>
              <p className="text-muted text-start px-3">
                Post the acquisition by TII in 2020, we have undertaken a
                focused transformation, restoring CG’s legacy of engineering
                excellence while building a foundation for sustainable and
                scalable growth. CG has always stood at the intersection of
                innovation, capability, and trust. With operations spanning
                three core sectors, Power, Industrial and Railways, the company
                is uniquely positioned to contribute to {"India's"} evolving
                economic ambitions. As the nation accelerates its journey toward
                self-reliance and global competitiveness, CG is ready to play a
                defining role in making India a manufacturing powerhouse for the
                world. In a time of disruption and reinvention, our goal is not
                merely to grow, but to lead - responsibly, strategically, and
                with a long-term vision.
              </p>
              <p className="fw-bold text-primary mt-3 mb-0">Vellayan Subblah</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;
