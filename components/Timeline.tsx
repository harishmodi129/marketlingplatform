"use client";
import React, { useState, useEffect } from "react";

interface TimelineItem {
  year: number;
  title: string;
  description: string;
  image: string;
}

interface WaveTimelineProps {
  data?: TimelineItem[];
}

const WaveTimeline: React.FC<WaveTimelineProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const defaultTimelineData: TimelineItem[] = [
    {
      year: 1878,
      title: "Our Beginning in England",
      description:
        "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
      image: "/house.jpg",
    },
    {
      year: 1937,
      title: "Industrial Expansion",
      description:
        "Major expansion into industrial electrical solutions and manufacturing.",
      image: "/imageone.png",
    },
    {
      year: 1960,
      title: "Technology Advances",
      description: "Rapid innovation in electrical technology and automation.",
      image: "/modify.jpg",
    },
    {
      year: 1982,
      title: "Digital Revolution",
      description: "Embracing computer-controlled systems and electronics.",
      image: "/newimage.jpg",
    },
    {
      year: 1996,
      title: "Global Reach",
      description: "Expanded operations to a global scale.",
      image: "/imagepat.jpg",
    },
    {
      year: 2010,
      title: "Modern Innovation",
      description: "Leading the way in sustainable technology solutions.",
      image: "/house.jpg",
    },
    {
      year: 2020,
      title: "Digital Transformation",
      description: "Embracing AI and IoT technologies for the future.",
      image: "/imageone.png",
    },
  ];

  const timelineData = data || defaultTimelineData;

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  const waveWidth = isMobile ? 600 : 1000;
  const waveHeight = isMobile ? 80 : 120;
  const centerX = waveWidth / 2;
  const itemSpacing = isMobile ? 80 : 120;

  const generateWavePath = (
    width: number,
    height: number,
    frequency: number = 3,
    amplitude: number = 25,
    phase: number = 0
  ) => {
    const points: string[] = [];
    for (let x = 0; x <= width; x += 10) {
      const y =
        amplitude * Math.sin((x / width) * frequency * Math.PI * 2 + phase) +
        height / 2;
      points.push(`${x},${y}`);
    }
    return `M${points.join(" L")}`;
  };

  const getWaveY = (x: number, waveIndex: number = 0) => {
    const frequency = 3;
    const amplitude =
      waveIndex === 0 ? (isMobile ? 20 : 25) : isMobile ? 15 : 20;
    const phase = waveIndex === 0 ? 0 : Math.PI;
    const baseY = waveIndex === 0 ? (isMobile ? 25 : 33) : isMobile ? 40 : 56;

    return (
      amplitude * Math.sin((x / waveWidth) * frequency * Math.PI * 2 + phase) +
      baseY +
      waveHeight / 2
    );
  };

  return (
    <div>
      {/* Header Section */}
      <div
        style={{
          // textAlign: "start",
          padding: isMobile ? "20px" : "40px 20px",
          margin: "auto",
          maxWidth: "1200px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "28px" : "42px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "16px",
            margin: 0,
          }}
        >
          CG Through the Years
        </h1>
        <p
          style={{
            fontSize: isMobile ? "16px" : "18px",
            color: "#666",
            maxWidth: "1200px",
            margin: "16px auto 0",
            lineHeight: "1.6",
          }}
        >
          From a pioneering start in 1878 to becoming a global name in
          electrical solutions, CG's journey is one of innovation, expansion,
          and transformation.
        </p>
      </div>

      {/* Timeline Section */}
      <div
        style={{
          background: "white",
          padding: "60px 0",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        {/* BIG BACKGROUND YEAR */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: isMobile ? "120px" : "320px",
            fontWeight: "bold",
            color: "rgba(0,0,0,0.05)",
            zIndex: 0,
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {timelineData[currentIndex].year}
        </div>

        {/* DESKTOP VIEW */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "40px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* Left button */}
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                cursor: "pointer",
                fontSize: "26px",
                transition: "all 0.2s ease",
              }}
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ‹
            </button>

            {/* FIXED SIZE CONTENT CONTAINER */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "30px",
                width: "900px",
                minWidth: "900px",
              }}
            >
              {/* IMAGE BOX */}
              <div
                style={{
                  width: "350px",
                  height: "260px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={timelineData[currentIndex].image}
                  alt={timelineData[currentIndex].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* CONNECTOR LINE */}
              <div
                style={{
                  width: "3px",
                  background: "#007bff",
                  height: "200px",
                  borderRadius: "2px",
                }}
              ></div>

              {/* TEXT BOX */}
              <div
                style={{
                  width: "350px",
                  minWidth: "350px",
                }}
              >
                <h2
                  style={{
                    fontSize: "34px",
                    fontWeight: "bold",
                    marginBottom: "12px",
                    margin: "0 0 12px 0",
                  }}
                >
                  {timelineData[currentIndex].title}
                </h2>
                <p style={{ fontSize: "18px", color: "#444", margin: 0 }}>
                  {timelineData[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Right button */}
            <button
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                border: "none",
                background: "white",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                cursor: "pointer",
                fontSize: "26px",
                transition: "all 0.2s ease",
              }}
              onClick={() =>
                setCurrentIndex((prev) =>
                  Math.min(timelineData.length - 1, prev + 1)
                )
              }
              disabled={currentIndex === timelineData.length - 1}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              ›
            </button>
          </div>
        )}

        {/* MOBILE VIEW - Card Style */}
        {isMobile && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "0 20px",
              position: "relative",
              zIndex: 2,
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                padding: "20px",
                width: "100%",
                maxWidth: "320px",
                position: "relative",
              }}
            >
              {/* Navigation dots */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {timelineData.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background:
                        index === currentIndex ? "#007bff" : "#e9ecef",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </div>

              {/* Title */}
              <h2
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  marginBottom: "12px",
                  textAlign: "left",
                  color: "#333",
                  margin: "0 0 12px 0",
                }}
              >
                {timelineData[currentIndex].title}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#666",
                  lineHeight: "1.5",
                  marginBottom: "16px",
                  textAlign: "left",
                  margin: "0 0 16px 0",
                }}
              >
                {timelineData[currentIndex].description}
              </p>

              {/* Image */}
              <div
                style={{
                  width: "100%",
                  height: "180px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "16px",
                }}
              >
                <img
                  src={timelineData[currentIndex].image}
                  alt={timelineData[currentIndex].title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Navigation arrows */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "none",
                    background: currentIndex === 0 ? "#f8f9fa" : "#007bff",
                    color: currentIndex === 0 ? "#ccc" : "white",
                    cursor: currentIndex === 0 ? "default" : "pointer",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() =>
                    setCurrentIndex((prev) => Math.max(0, prev - 1))
                  }
                  disabled={currentIndex === 0}
                >
                  ‹
                </button>

                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      currentIndex === timelineData.length - 1
                        ? "#f8f9fa"
                        : "#007bff",
                    color:
                      currentIndex === timelineData.length - 1
                        ? "#ccc"
                        : "white",
                    cursor:
                      currentIndex === timelineData.length - 1
                        ? "default"
                        : "pointer",
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                  onClick={() =>
                    setCurrentIndex((prev) =>
                      Math.min(timelineData.length - 1, prev + 1)
                    )
                  }
                  disabled={currentIndex === timelineData.length - 1}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        )}

        {/* WAVES + YEAR BUBBLES */}
        <div style={{ position: "relative" }}>
          <svg
            width="100%"
            height="200"
            viewBox={`0 0 ${waveWidth} 200`}
            style={{
              overflow: "visible",
              transform: isMobile ? "scale(0.8)" : "scale(1)",
            }}
          >
            <path
              d={generateWavePath(waveWidth, waveHeight, 3, 25, 0)}
              fill="none"
              stroke="rgba(59,130,246,0.6)"
              strokeWidth="0.79"
              transform="translate(0, 33)"
            />
            <path
              d={generateWavePath(waveWidth, waveHeight, 3, 20, Math.PI)}
              fill="none"
              stroke="rgba(16,185,129,0.6)"
              strokeWidth="0.79"
              transform="translate(0, 56)"
            />
            <line
              x1={centerX}
              y1="20"
              x2={centerX}
              y2="180"
              stroke="#007bff"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity="0.7"
            />

            {timelineData.map((item: TimelineItem, index: number) => {
              const offsetFromCurrent = index - currentIndex;
              const x = centerX + offsetFromCurrent * itemSpacing;
              if (x < -100 || x > waveWidth + 100) return null;

              const waveIndex = index % 2;
              const y = getWaveY(x, waveIndex);
              const isActive = index === currentIndex;
              const bubbleSize = isActive
                ? isMobile
                  ? 50
                  : 60
                : isMobile
                ? 38
                : 45;
              const distanceFromCenter = Math.abs(offsetFromCurrent);
              const opacity = Math.max(0.3, 1 - distanceFromCenter * 0.2);

              return (
                <g key={index} style={{ opacity }}>
                  <circle
                    cx={x}
                    cy={y}
                    r={bubbleSize / 2}
                    fill={
                      isActive
                        ? "#007bff"
                        : waveIndex === 0
                        ? "#93c5fd"
                        : "#86efac"
                    }
                    stroke={isActive ? "#0056b3" : "white"}
                    strokeWidth="2"
                    onClick={() => handleClick(index)}
                    style={{
                      cursor: "pointer",
                      transition: "all 0.5s ease",
                      filter: isActive
                        ? "drop-shadow(0 4px 8px rgba(0,123,255,0.3))"
                        : "none",
                    }}
                  />
                  <text
                    x={x}
                    y={y + 5}
                    textAnchor="middle"
                    style={{
                      fill: isActive ? "white" : "#495057",
                      fontSize: isActive
                        ? isMobile
                          ? "14px"
                          : "16px"
                        : isMobile
                        ? "10px"
                        : "12px",
                      fontWeight: isActive ? "bold" : "normal",
                      pointerEvents: "none",
                      transition: "all 0.5s ease",
                    }}
                  >
                    {item.year}
                  </text>

                  {/* Connecting line for active item */}
                  {isActive && (
                    <line
                      x1={centerX}
                      y1="180"
                      x2={x}
                      y2={y + bubbleSize / 2 + 5}
                      stroke="#007bff"
                      strokeWidth="1"
                      opacity="0.5"
                      strokeDasharray="2,2"
                    />
                  )}
                </g>
              );
            })}

            {/* Center indicator dot */}
            <circle
              cx={centerX}
              cy="185"
              r="4"
              fill="#007bff"
              stroke="white"
              strokeWidth="2"
            />
          </svg>

          {/* Timeline Labels */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "12px",
              padding: "0 12px",
            }}
          >
            <small
              style={{
                color: "#007bff",
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: "bold",
              }}
            >
              {timelineData[currentIndex].year}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaveTimeline;
