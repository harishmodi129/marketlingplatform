"use client";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

const Word = () => {
  const facilities = [
    {
      id: 1,
      title: "FHP Motors’ Manufacturing Facility",
      location: "Kundaim, Goa, India",
      image: "/house.jpg",
    },
    {
      id: 2,
      title: "Climate AC Facility",
      location: "Colvale, Goa, India",
      image: "/house.jpg",
    },
    {
      id: 3,
      title: "Switchgear Manufacturing Facility",
      location: "Mumbai, India",
      image: "/house.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <h1
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 700,
          fontStyle: "normal",
          fontSize: "48px",
          lineHeight: "140%",
          letterSpacing: "0.5px",
          marginBottom: "16px",
        }}
      >
        World-class manufacturing facilities
      </h1>

      <p
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          fontSize: "16px",
          lineHeight: "140%",
          letterSpacing: "0.5px",
          marginBottom: "32px",
        }}
      >
        CG&apos;s high-efficiency plants are setting new industry benchmarks
        across the world.
      </p>

      <Carousel interval={3000} pause="hover">
        {facilities.map((facility) => (
          <Carousel.Item key={facility.id}>
            <div className="position-relative">
              <Image
                src={facility.image}
                alt={facility.title}
                width={1200}
                height={600}
                className="d-block w-100 rounded-4"
                style={{
                  objectFit: "cover",
                  boxShadow: "2px 2px 20px 4px #0000001A",
                  borderRadius: "16px",
                }}
              />

              <div
                className="position-absolute bottom-0 start-0 w-100 text-white p-3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                  borderRadius: "0 0 16px 16px",
                }}
              >
                <h5 className="fw-bold mb-1">{facility.title}</h5>
                <p className="mb-0">{facility.location}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Word;
