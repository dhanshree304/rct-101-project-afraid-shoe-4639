import React from "react";
import "../App.css";
import { Heading } from "@chakra-ui/react";

const PerformancePage = () => {
  const performances = [
    {
      id: 1,
      year: 2020,
      title: "60% growth with compatitor",
      image:
        "https://image.freepik.com/free-photo/technical-financial-graph-technology-abstract-background_34663-15.jpg",
    },
    {
      id: 2,
      year: 2021,
      title: "80% up in funding market",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.uaBlvC9Yr-8txqmjinRroQHaE8&pid=ImgDet&w=1200&h=800&rs=1",
    },
    {
      id: 3,
      year: 2022,
      title: "70% investment rate",
      image:
        "https://tse2.mm.bing.net/th?id=OIP.uaBlvC9Yr-8txqmjinRroQHaE8&pid=ImgDet&w=1200&h=800&rs=1",
    },
  ];

  return (
    <div className="performance-page-container">
      <Heading mb={10}> Performance</Heading>
      <div className="performance-list">
        {performances.map((performance) => (
          <div key={performance.id} className="performance-card">
            <img
              src={performance.image}
              alt={`Performance ${performance.year}`}
              className="performance-image"
            />
            <p style={{ textAlign: "center", margin: "10px" }}>
              {performance.title}
            </p>
            <div className="performance-overlay">
              <h3 className="performance-year">{performance.year}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformancePage;
