import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SchoolRegions = () => {
  const [regionsCount, setRegionsCount] = useState([]);

  useEffect(() => {
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        // Count schools by region
        const regionCounts = data.reduce((acc, school) => {
          const region = school.region; // Assuming each school has a 'region' property
          if (region) {
            acc[region] = (acc[region] || 0) + 1; // Increment count for the region
          }
          return acc;
        }, {});

        // Convert the regionCounts object to an array of { region, count }
        const regionsArray = Object.entries(regionCounts).map(([region, count]) => ({
          region,
          count,
        }));

        setRegionsCount(regionsArray);
      })
      .catch((error) => console.error("Error fetching school data:", error));
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <h2 className="line-bottom text-center">Schools by Region</h2>
          </div>
        </div>
        <Link to="/schools">
          <div className="row g-4">
            {regionsCount.map(({ region, count }) => (
              <div className="col-12 col-md-6 col-lg-3" key={region}>
                <div className="card text-center p-3">
                  <h5 className="fw-bold mb-0">{region}</h5>
                  <hr />
                  <p className="text-muted mb-0">{count.toLocaleString()} international schools</p>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SchoolRegions;