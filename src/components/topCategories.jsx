import React, { useEffect, useState } from "react";

const TopCategories = () => {
  const [regionsCount, setRegionsCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [citiesCount, setCitiesCount] = useState(0);
  const [schoolsCount, setSchoolsCount] = useState(0);

  useEffect(() => {
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        const regionSet = new Set();
        const countrySet = new Set();
        const citySet = new Set();
        let schoolCount = 0;

        data.forEach((school) => {
          if (school.region) regionSet.add(school.region);
          if (school.country) countrySet.add(school.country);
          if (school.city) citySet.add(school.city);
          schoolCount++;
        });

        setRegionsCount(regionSet.size);
        setCountriesCount(countrySet.size);
        setCitiesCount(citySet.size);
        setSchoolsCount(schoolCount);
      })
      .catch((error) => console.error("Error fetching school data:", error));
  }, []);

  return (
    <div className="untree_co-section">
      <div className="container">
        <div className="row text-md-center mb-4">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom">We Have</h2>
          </div>
        </div>
        <div className="row justify-content-between mb-3">
          <div className="col-sm-3 col-md-3 col-lg-3 mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="category d-flex align-items-center p-0">
              <div className="background p-3">
                <img
                  src="https://www.edarabia.com/wp-content/themes/newed/assets/images/university.svg"
                  alt="icon"
                  height="50"
                  width="auto"
                />
              </div>
              <div className="ml-3">
                <h3 className="fw-bold fs-3">{regionsCount}</h3>
                <span className="fs-5">Regions</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="category d-flex align-items-center p-0">
              <div className="background p-3">
                <img
                  src="https://www.edarabia.com/wp-content/themes/newed/assets/images/university.svg"
                  alt="icon"
                  height="50"
                  width="auto"
                />
              </div>
              <div className="ml-3">
                <h3 className="fw-bold fs-3">{countriesCount}</h3>
                <span className="fs-5">Countries</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="category d-flex align-items-center p-0">
              <div className="background p-3">
                <img
                  src="https://www.edarabia.com/wp-content/themes/newed/assets/images/university.svg"
                  alt="icon"
                  height="50"
                  width="auto"
                />
              </div>
              <div className="ml-3">
                <h3 className="fw-bold fs-3">{citiesCount}</h3>
                <span className="fs-5">Cities</span>
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3 mt-4" data-aos="fade-up" data-aos-delay="100">
            <div className="category d-flex align-items-center p-0">
              <div className="background p-3">
                <img
                  src="https://www.edarabia.com/wp-content/themes/newed/assets/images/university.svg"
                  alt="icon"
                  height="50"
                  width="auto"
                />
              </div>
              <div className="ml-3">
                <h3 className="fw-bold fs-3">{schoolsCount.toLocaleString()}</h3>
                <span className="fs-5">Schools</span>
              </div>
            </div>
          </div>
        </div>       
      </div>
    </div>
  );
};

export default TopCategories;