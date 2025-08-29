"use client";
// import React, { useRef, useState, useEffect } from "react";

// interface ImpactNumber {
//   label: string;
//   value: string;
//   subValue?: string;
//   growth?: boolean;
//   isLast?: boolean;
// }

// const impactNumbers: ImpactNumber[] = [
//   { label: "Standalone Revenue", value: "₹9,329 Cr", subValue: "($1.06B)" },
//   { label: "Consolidated Revenue", value: "₹9,909 Cr", subValue: "($1.13B)" },
//   {
//     label: "Unexecuted Order Book",
//     value: "₹10,631 Cr",
//     subValue: "($1.21B)",
//   },
//   { label: "Order Intake Reached", value: "₹13,526 Cr", subValue: "($1.6B)" },
//   { label: "(PBT) Growth", value: "17%", growth: true },
//   { label: "Revenue Growth YoY", value: "23%", growth: true },
//   { label: "ROCE", value: "33%", isLast: true },
// ];

// export default function ImpactNumbers() {
//   const parentRef = useRef<HTMLDivElement | null>(null);
//   const leftRef = useRef<HTMLDivElement | null>(null);
//   const [offsetTop, setOffsetTop] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     // Check if screen is mobile
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     checkMobile();
//     window.addEventListener("resize", checkMobile);

//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   useEffect(() => {
//     // Only apply scroll effect on desktop
//     if (isMobile) return;

//     // const handleScroll = () => {
//     //   if (!parentRef.current || !leftRef.current) return;

//     //   const parent = parentRef.current;
//     //   const scrollY = window.scrollY || window.pageYOffset;
//     //   const parentTop = parent.offsetTop;
//     //   const parentHeight = parent.offsetHeight;

//     //   const scrollStart = parentTop;
//     //   const scrollEnd = parentTop + parentHeight;
//     //   const scrollProgress = Math.max(
//     //     0,
//     //     Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart))
//     //   );

//     //   let currentOffset;

//     //   if (scrollProgress <= 1 / 3) {
//     //     currentOffset = scrollProgress * 3 * 150;
//     //   } else if (scrollProgress <= 2 / 3) {
//     //     currentOffset = 150 + (scrollProgress - 1 / 3) * 3 * 150;
//     //   } else {
//     //     currentOffset = 300 + (scrollProgress - 2 / 3) * 3 * 150;
//     //   }

//     //   setOffsetTop(currentOffset);
//     // };
//     // Simplified parallax calculation
//     const handleScroll = () => {
//       if (!parentRef.current || !leftRef.current) return;

//       const parent = parentRef.current;
//       const leftColumn = leftRef.current;
//       const scrollY = window.scrollY || window.pageYOffset;
//       const parentTop = parent.offsetTop;
//       const parentHeight = parent.offsetHeight;
//       const leftColumnHeight = leftColumn.offsetHeight;

//       const scrollStart = parentTop;
//       const scrollEnd = parentTop + parentHeight;
//       const scrollProgress = Math.max(
//         0,
//         Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart))
//       );

//       // Calculate total distance the left column needs to travel
//       // From initial position (-300px) to align bottom with parent bottom
//       const initialOffset = -100;
//       const finalOffset = parentHeight - leftColumnHeight; // Aligns bottom of left column with bottom of parent
//       const totalDistance = finalOffset - initialOffset;

//       // Linear movement based on scroll progress
//       const currentOffset = initialOffset + scrollProgress * totalDistance;

//       setOffsetTop(currentOffset);
//     };
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMobile]);

//   if (isMobile) {
//     // Mobile Layout
//     return (
//       <div style={{ padding: "20px", fontFamily: "'Inter', sans-serif" }}>
//         {/* Background Blur - adjusted for mobile */}
//         <div
//           style={{
//             position: "absolute",
//             top: "0px",
//             left: "-50px",
//             width: "300px",
//             height: "300px",
//             background: "radial-gradient(circle at center, #f1f5f9, #e2e8f0)",
//             borderRadius: "50%",
//             zIndex: -1,
//             filter: "blur(40px)",
//             opacity: 0.6,
//           }}
//         />

//         {/* Title Section */}
//         <div style={{ textAlign: "center", marginBottom: "40px" }}>
//           <h1
//             style={{
//               fontSize: "48px",
//               fontWeight: "800",
//               color: "transparent",
//               letterSpacing: "1px",
//               lineHeight: "0.85",
//               WebkitTextStroke: "2px #4C4F54",
//               fontFamily: "Helvetica",
//               margin: 0,
//             }}
//           >
//             Impact
//           </h1>
//           <h1
//             style={{
//               fontSize: "56px",
//               fontWeight: "800",
//               color: "#1e40af",
//               letterSpacing: "1px",
//               lineHeight: "0.85",
//               margin: "10px 0 0 0",
//             }}
//           >
//             numbers
//           </h1>
//         </div>

//         {/* Numbers Section */}
//         <div>
//           {impactNumbers.map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 minHeight: "80px",
//                 borderBottom: !item.isLast ? "1px solid #e2e8f0" : "none",
//                 padding: "20px 0",
//                 textAlign: "center",
//               }}
//             >
//               <div style={{ marginBottom: "15px" }}>
//                 <div
//                   style={{
//                     fontSize: "16px",
//                     color: "#64748b",
//                     fontWeight: "500",
//                     marginBottom: "5px",
//                   }}
//                 >
//                   {item.label}
//                 </div>
//                 {item.subValue && (
//                   <div
//                     style={{
//                       fontSize: "13px",
//                       color: "#94a3b8",
//                       fontWeight: "400",
//                     }}
//                   >
//                     {item.subValue}
//                   </div>
//                 )}
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "8px",
//                   flexWrap: "wrap",
//                 }}
//               >
//                 <div
//                   style={{
//                     fontSize: "32px",
//                     fontWeight: "700",
//                     color: item.growth ? "#22c55e" : "#1e40af",
//                     lineHeight: "1",
//                   }}
//                 >
//                   {item.value}
//                 </div>
//                 {item.growth && (
//                   <div
//                     style={{
//                       width: 0,
//                       height: 0,
//                       borderLeft: "8px solid transparent",
//                       borderRight: "8px solid transparent",
//                       borderBottom: "12px solid #22c55e",
//                     }}
//                   />
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   // Desktop Layout (unchanged)
//   return (
//     <div className="container-fluid">
//       <div
//         ref={parentRef}
//         className="d-flex position-relative"
//         style={{
//           minHeight: "100vh",
//           marginTop: "50px",
//           fontFamily: "'Inter', sans-serif",
//           overflow: "visible",
//           zIndex: 0,
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: "-150px",
//             left: "-100px",
//             width: "600px",
//             height: "600px",
//             background: "radial-gradient(circle at center, #f1f5f9, #e2e8f0)",
//             borderRadius: "50%",
//             zIndex: -1,
//             filter: "blur(80px)",
//             opacity: 0.6,
//           }}
//         />

//         {/* Left Column */}
//         <div
//           ref={leftRef}
//           className="position-absolute"
//           style={{
//             width: "389px",
//             height: "548px",
//             left: "100px",
//             top: "-300px",
//             transform: `translateY(${offsetTop}px)`,
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             padding: "20px",
//             transition: "transform 0.1s ease-out",
//           }}
//         >
//           <h1
//             className="mb-0"
//             style={{
//               fontSize: "72px",
//               fontWeight: "800",
//               color: "transparent",
//               letterSpacing: "2px",
//               lineHeight: "0.85",
//               WebkitTextStroke: "2px #4C4F54",
//               fontFamily: "Helvetica",
//             }}
//           >
//             Impact
//           </h1>
//           <h1
//             className="mt-3 mb-0"
//             style={{
//               fontSize: "84px",
//               fontWeight: "800",
//               color: "#1e40af",
//               letterSpacing: "1px",
//               lineHeight: "0.85",
//             }}
//           >
//             numbers
//           </h1>
//         </div>

//         <div
//           className="ms-auto"
//           style={{
//             width: "55%",
//             padding: "0 40px",
//           }}
//         >
//           <div>
//             {impactNumbers.map((item, index) => (
//               <div
//                 key={index}
//                 className="d-flex justify-content-between align-items-center"
//                 style={{
//                   minHeight: "100px",
//                   borderBottom: !item.isLast ? "1px solid #e2e8f0" : "none",
//                 }}
//               >
//                 <div className="flex-grow-1">
//                   <div
//                     style={{
//                       fontSize: "18px",
//                       color: "#64748b",
//                       fontWeight: "500",
//                     }}
//                   >
//                     {item.label}
//                   </div>
//                   {item.subValue && (
//                     <div
//                       style={{
//                         fontSize: "14px",
//                         color: "#94a3b8",
//                         fontWeight: "400",
//                       }}
//                     >
//                       {item.subValue}
//                     </div>
//                   )}
//                 </div>

//                 <div
//                   className="d-flex align-items-center"
//                   style={{
//                     gap: "12px",
//                     minWidth: "180px",
//                     flexWrap: "wrap",
//                     justifyContent: "flex-end",
//                   }}
//                 >
//                   <div
//                     style={{
//                       fontSize: "40px",
//                       fontWeight: "700",
//                       color: item.growth ? "#22c55e" : "#1e40af",
//                       lineHeight: "1",
//                     }}
//                   >
//                     {item.value}
//                   </div>
//                   {item.subValue && (
//                     <div
//                       style={{
//                         fontSize: "16px",
//                         color: "#64748b",
//                         fontWeight: "400",
//                       }}
//                     >
//                       {item.subValue}
//                     </div>
//                   )}
//                   {item.growth && (
//                     <div
//                       style={{
//                         width: 0,
//                         height: 0,
//                         borderLeft: "10px solid transparent",
//                         borderRight: "10px solid transparent",
//                         borderBottom: "14px solid #22c55e",
//                       }}
//                     />
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }

import { useRef, useState, useEffect } from "react";

interface ImpactNumber {
  label: string;
  value: string;
  subValue?: string;
  growth?: boolean;
  isLast?: boolean;
}

const impactNumbers: ImpactNumber[] = [
  { label: "Standalone Revenue", value: "₹9,329 Cr", subValue: "($1.06B)" },
  { label: "Consolidated Revenue", value: "₹9,909 Cr", subValue: "($1.13B)" },
  {
    label: "Unexecuted Order Book",
    value: "₹10,631 Cr",
    subValue: "($1.21B)",
  },
  { label: "Order Intake Reached", value: "₹13,526 Cr", subValue: "($1.6B)" },
  { label: "(PBT) Growth", value: "17%", growth: true },
  { label: "Revenue Growth YoY", value: "23%", growth: true },
  { label: "ROCE", value: "33%", isLast: true },
];

export default function ImpactNumbers() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const [offsetTop, setOffsetTop] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Only apply scroll effect on desktop
    if (isMobile) return;

    const handleScroll = () => {
      if (!parentRef.current || !leftRef.current) return;

      const parent = parentRef.current;
      const leftColumn = leftRef.current;
      const scrollY = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;

      // Get parent div's position relative to viewport
      const parentRect = parent.getBoundingClientRect();
      const parentTop = parentRect.top + scrollY; // Absolute position from document top
      const parentHeight = parent.offsetHeight;
      const leftColumnHeight = leftColumn.offsetHeight;

      // Calculate when parent div starts and ends being visible/scrolled
      const parentStartsScrolling = parentTop - viewportHeight; // When parent first enters viewport
      const parentFinishesScrolling = parentTop + parentHeight; // When parent fully exits viewport

      // Calculate scroll progress through the parent div
      let scrollProgress = 0;

      if (
        scrollY >= parentStartsScrolling &&
        scrollY <= parentFinishesScrolling
      ) {
        const totalScrollDistance =
          parentFinishesScrolling - parentStartsScrolling;
        scrollProgress =
          (scrollY - parentStartsScrolling) / totalScrollDistance;
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      } else if (scrollY > parentFinishesScrolling) {
        scrollProgress = 1;
      }

      // Calculate movement proportional to how much parent div has been scrolled
      const initialOffset = -300;
      const finalOffset = parentHeight - leftColumnHeight;
      const totalDistance = finalOffset - initialOffset;

      // Move child div proportionally to parent div scroll progress
      const currentOffset = initialOffset + scrollProgress * totalDistance;

      setOffsetTop(currentOffset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  if (isMobile) {
    // Mobile Layout
    return (
      <div style={{ padding: "20px", fontFamily: "'Inter', sans-serif" }}>
        {/* Background Blur - adjusted for mobile */}
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "-50px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle at center, #f1f5f9, #e2e8f0)",
            borderRadius: "50%",
            zIndex: -1,
            filter: "blur(40px)",
            opacity: 0.6,
          }}
        />

        {/* Title Section */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "800",
              color: "transparent",
              letterSpacing: "1px",
              lineHeight: "0.85",
              WebkitTextStroke: "2px #4C4F54",
              fontFamily: "Helvetica",
              margin: 0,
            }}
          >
            Impact
          </h1>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "800",
              color: "#1e40af",
              letterSpacing: "1px",
              lineHeight: "0.85",
              margin: "10px 0 0 0",
            }}
          >
            numbers
          </h1>
        </div>

        {/* Numbers Section */}
        <div>
          {impactNumbers.map((item, index) => (
            <div
              key={index}
              style={{
                minHeight: "80px",
                borderBottom: !item.isLast ? "1px solid #e2e8f0" : "none",
                padding: "20px 0",
                textAlign: "center",
              }}
            >
              <div style={{ marginBottom: "15px" }}>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#64748b",
                    fontWeight: "500",
                    marginBottom: "5px",
                  }}
                >
                  {item.label}
                </div>
                {item.subValue && (
                  <div
                    style={{
                      fontSize: "13px",
                      color: "#94a3b8",
                      fontWeight: "400",
                    }}
                  >
                    {item.subValue}
                  </div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    color: item.growth ? "#22c55e" : "#1e40af",
                    lineHeight: "1",
                  }}
                >
                  {item.value}
                </div>
                {item.growth && (
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderBottom: "12px solid #22c55e",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop Layout with Fixed Parallax
  return (
    <div className="container-fluid">
      <div
        ref={parentRef}
        className="d-flex position-relative"
        style={{
          minHeight: "100vh",
          marginTop: "50px",
          fontFamily: "'Inter', sans-serif",
          overflow: "visible",
          zIndex: 0,
        }}
      >
        {/* Background Blur Effect */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            left: "-100px",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle at center, #f1f5f9, #e2e8f0)",
            borderRadius: "50%",
            zIndex: -1,
            filter: "blur(80px)",
            opacity: 0.6,
          }}
        />

        {/* Left Column - Parallax Title */}
        <div
          ref={leftRef}
          className="position-absolute"
          style={{
            width: "389px",
            height: "548px",
            left: "100px",
            top: "-100px",
            transform: `translateY(${offsetTop}px)`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "20px",
            transition: "transform 0.1s ease-out",
          }}
        >
          <h1
            className="mb-0"
            style={{
              fontSize: "72px",
              fontWeight: "800",
              color: "transparent",
              letterSpacing: "2px",
              lineHeight: "0.85",
              WebkitTextStroke: "2px #4C4F54",
              fontFamily: "Helvetica",
            }}
          >
            Impact
          </h1>
          <h1
            className="mt-3 mb-0"
            style={{
              fontSize: "84px",
              fontWeight: "800",
              color: "#1e40af",
              letterSpacing: "1px",
              lineHeight: "0.85",
            }}
          >
            numbers
          </h1>
        </div>

        {/* Right Column - Numbers */}
        <div
          className="ms-auto"
          style={{
            width: "55%",
            padding: "0 40px",
          }}
        >
          <div>
            {impactNumbers.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center"
                style={{
                  minHeight: "100px",
                  borderBottom: !item.isLast ? "1px solid #e2e8f0" : "none",
                }}
              >
                <div className="flex-grow-1">
                  <div
                    style={{
                      fontSize: "18px",
                      color: "#64748b",
                      fontWeight: "500",
                    }}
                  >
                    {item.label}
                  </div>
                  {item.subValue && (
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#94a3b8",
                        fontWeight: "400",
                      }}
                    >
                      {item.subValue}
                    </div>
                  )}
                </div>

                <div
                  className="d-flex align-items-center"
                  style={{
                    gap: "12px",
                    minWidth: "180px",
                    flexWrap: "wrap",
                    justifyContent: "flex-end",
                  }}
                >
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "700",
                      color: item.growth ? "#22c55e" : "#1e40af",
                      lineHeight: "1",
                    }}
                  >
                    {item.value}
                  </div>
                  {item.growth && (
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderBottom: "14px solid #22c55e",
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
