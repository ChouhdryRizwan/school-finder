import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SchoolCountries = () => {
  const [countries, setCountries] = useState([]); // State for countries and their school counts
  const [displayedCountries, setDisplayedCountries] = useState([]); // State for countries to display

  useEffect(() => {
    // Fetch school data from JSON file
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        // Count schools per country
        const countryCounts = data.reduce((acc, school) => {
          acc[school.country] = (acc[school.country] || 0) + 1;
          return acc;
        }, {});

        // Convert to array of objects
        const countriesArray = Object.keys(countryCounts).map((country) => ({
          name: country,
          count: countryCounts[country],
          flag: `https://flagcdn.com/w320/${country
            .toLowerCase()
            .slice(0, 2)}.png`, // Dummy flag URL
        }));

        setCountries(countriesArray);
        setDisplayedCountries(countriesArray.slice(0, 8)); // Show first 8 countries by default
      })
      .catch((error) => console.error("Error fetching school data:", error));
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <h2 className="line-bottom text-center">Schools by Countries</h2>
          </div>
        </div>
        <div className="row g-4">
          {displayedCountries.map((country, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <Link to="/schools">
                <div className="card p-3">
                  <div className="country-info">
                    <img
                      src={country.flag}
                      alt={`${country.name} Flag`}
                      className="flag-icon"
                    />
                    <span className="divider"></span>
                    <div>
                      <strong>{country.name}</strong>
                      <p className="text-muted mb-0">
                        {country.count} international schools
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* <div className="row justify-content-center mt-4">
          <Link to="/schools" className="btn btn-primary">
            Show More
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SchoolCountries;
