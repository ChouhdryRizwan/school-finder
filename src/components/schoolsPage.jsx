import React, { useEffect, useState } from "react";
import heroimage from "../assets/images/hero-img-1-min.jpg";
import { Link } from "react-router-dom";

const regions = {
  "South America": ["Argentina"],
  "Oceania": ["Australia"],
  "Middle East": [
    "Bahrain",
    "Egypt",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "Oman",
    "Qatar",
    "Saudi Arabia",
    "Turkey",
    "UAE",
  ],
  "South Asia": ["India", "Pakistan"],
  "Southeast Asia": ["Philippines"],
  "Eastern Europe": ["Russia"],
  "North America": ["United States"],
};

const SchoolsPage = () => {
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [curriculum, setCurriculum] = useState("");
  const [gender, setGender] = useState("");
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [curriculums, setCurriculums] = useState([]);
  const [genders, setGenders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const schoolsPerPage = 10;

  useEffect(() => {
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
        setFilteredSchools(data);
        const uniqueCurriculums = [
          ...new Set(data.map((school) => school.curriculum)),
        ];
        const uniqueGenders = [...new Set(data.map((school) => school.gender))];
        setCurriculums(uniqueCurriculums);
        setGenders(uniqueGenders);
      })
      .catch((error) => console.error("Error fetching school data:", error));
  }, []);

  useEffect(() => {
    if (country) {
      const filteredCities = [
        ...new Set(
          schools
            .filter((school) => school.country === country)
            .map((school) => school.city)
        ),
      ];
      setCities(filteredCities);
    } else {
      setCities([]);
    }
  }, [country, schools]);

  useEffect(() => {
    let filtered = schools;

    if (searchTerm) {
      filtered = filtered.filter((school) =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (region) {
      filtered = filtered.filter((school) => school.region === region);
    }

    if (country) {
      filtered = filtered.filter((school) => school.country === country);
    }

    if (city) {
      filtered = filtered.filter((school) => school.city === city);
    }

    if (curriculum) {
      filtered = filtered.filter((school) => school.curriculum === curriculum);
    }

    if (gender) {
      filtered = filtered.filter((school) => school.gender === gender);
    }

    setFilteredSchools(filtered);
    setCurrentPage(1);
  }, [searchTerm, region, country, city, curriculum, gender, schools]);

  useEffect(() => {
    if (region) {
      setCountries(regions[region]);
      setCountry(""); // Reset country when region changes
      setCity(""); // Reset city when region changes
    } else {
      setCountries([]); // Clear countries if no region is selected
    }
  }, [region]);

  const indexOfLastSchool = currentPage * schoolsPerPage;
  const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
  const currentSchools = filteredSchools.slice(
    indexOfFirstSchool,
    indexOfLastSchool
  );
  const totalPages = Math.ceil(filteredSchools.length / schoolsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  const capitalizeFirstLetter = (string) => {
    if (!string) return ""; // Handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <div
        className="untree_co-hero overlay"
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center ">
                <div className="col-lg-6 text-center">
                  <h1
                    className="heading text-white"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    Find Schools
                  </h1>
                  <div
                    className="text-white mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p>
                      Find the best schools worldwide, from primary to
                      specialized institutions. Explore detailed profiles,
                      compare options, and choose the perfect place for your
                      educational journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3" id="schools">
        <div className="row">
          <div className="col-md-3 sidebar">
            <div className="head d flex justify-content-between align-items-center">
              <h3>School search</h3>
              <button
                type="button"
                className="side-btn"
                onClick={() => {
                  setSearchTerm("");
                  setRegion("");
                  setCountry("");
                  setCity("");
                  setCurriculum("");
                  setGender("");
                }}
              >
                CLEAR ALL
              </button>
            </div>
            <div className="filters py-2">
              <input
                type="text"
                className="form-control search"
                id="searchSchool"
                placeholder="Search school name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <h5>Locations</h5>
            <div className="filters">
              <select
                className="form-select"
                id="region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="">Regions</option>
                {Object.keys(regions).map((regionKey) => (
                  <option key={regionKey} value={regionKey}>
                    {regionKey}
                  </option>
                ))}
              </select>
            </div>
            <div className="filters">
              <select
                className="form-select"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="filters">
              <select
                className="form-select"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {capitalizeFirstLetter(city)}
                  </option>
                ))}
              </select>
            </div>

            <h5>Filters</h5>
            <div className="filters">
              <select
                className="form-select"
                id="curriculum"
                value={curriculum}
                onChange={(e) => setCurriculum(e.target.value)}
              >
                <option value="">Curriculums</option>
                {curriculums.map((curriculum) => (
                  <option key={curriculum} value={curriculum}>
                    {curriculum}
                  </option>
                ))}
              </select>
            </div>
            <div className="filters">
              <select
                className="form-select"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Gender</option>
                {genders.map((gender) => (
                  <option key={gender} value={gender}>
                    {gender}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-md-9 main-content">
            <div className="content p-3 bg-light rounded">
              <div className="head-content d-flex justify-content-between align-items-center row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-8">
                  <h2>
                    {filteredSchools.length} International schools match your
                    search
                  </h2>
                </div>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 py-2">
                  <div className="d-flex align-items-center gap-2">
                    <i className="bx bx-sort-up fs-3 px-2"></i>
                    <button type="button" className="side-btn">
                      MAP
                    </button>
                    <button type="button" className="side-btn">
                      LIST
                    </button>
                  </div>
                </div>
              </div>
              <div className="row gy-4 mt-2">
                {currentSchools.length === 0 ? (
                  <p>No schools found.</p>
                ) : (
                  currentSchools.map((school) => (
                    <div className="col-md-12" key={school.id}>
                      <Link to={`/school-details/${school.id}`}>
                        <div className="card mb-2">
                          <div className="row">
                            <div className="col-md-4 text-center align-content-center">
                              <img
                                src={
                                  school.image || "path/to/default/image.jpg"
                                }
                                className="card-img h-75 w-75"
                                alt={school.name}
                              />
                            </div>
                            <div className="col-md-8 align-content-around">
                              <div className="card-body">
                                <div className="card-head d-flex justify-content-between align-items-center">
                                  <h4 className="card-title fw-bold">
                                    {school.name}
                                  </h4>
                                </div>
                                <p className="card-text ">
                                {capitalizeFirstLetter(school.city)}, {school.country}
                                </p>
                                <p className="card-text">
                                  <span className="fw-bold text-primary">
                                    Ratings:{" "}
                                  </span>
                                  {school.rating}
                                </p>
                                <div className="card-check-main">
                                  <div className="row justify-content-between">
                                    <div className="col-sm-6 col-md-6 col-lg-7 align-content-center">
                                      <div className="main-con">
                                        <div className="card-check d-flex align-items-center">
                                          <i className="bx bx-check fs-4 text-primary"></i>
                                          <p className="card-text">
                                            <small>
                                              <span className="fw-bold text-primary">
                                                Curriculum:{" "}
                                              </span>
                                              {school.curriculum}
                                            </small>
                                          </p>
                                        </div>
                                        <div className="card-check d-flex align-items-center">
                                          <i className="bx bx-check fs-4 text-primary"></i>
                                          <p className="card-text">
                                            <small>
                                              <span className="fw-bold text-primary">
                                                Fee:{" "}
                                              </span>
                                              {school.fee}
                                            </small>
                                          </p>
                                        </div>
                                        <div className="card-check d-flex align-items-center">
                                          <i className="bx bx-check fs-4 text-primary"></i>
                                          <p className="card-text">
                                            <small>
                                              <span className="fw-bold text-primary">
                                                Gender:{" "}
                                              </span>
                                              {school.gender}
                                            </small>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-sm-6 col-md-6 col-lg-4 text-center align-content-center">
                                      <button className="btn btn-outline-primary btn-sm px-2 rounded-5">
                                        See Details
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
              <div className="pagination d-block d-md-flex justify-content-center my-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="btn btn-outline-primary btn-sm mx-1"
                >
                  Previous
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`btn mx-1 btn-sm mt-3 mt-md-0 ${
                      currentPage === number
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="btn btn-outline-primary btn-sm mx-1 mt-3 mt-md-0"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolsPage;
