import React, { useEffect, useState } from "react";
import heroimage from "../assets/images/hero-img-1-min.jpg";
import { Link } from "react-router-dom";

const SchoolsPage = () => {
  const [schools, setSchools] = useState([]); // State for all schools
  const [filteredSchools, setFilteredSchools] = useState([]); // State for filtered schools
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [region, setRegion] = useState(""); // State for selected region
  const [country, setCountry] = useState(""); // State for selected country
  const [city, setCity] = useState(""); // State for selected city
  const [curriculum, setCurriculum] = useState(""); // State for selected curriculum
  const [gender, setGender] = useState(""); // State for selected gender
  const [countries, setCountries] = useState([]); // State for unique countries
  const [cities, setCities] = useState([]); // State for unique cities
  const [curriculums, setCurriculums] = useState([]); // State for unique curriculums
  const [genders, setGenders] = useState([]); // State for unique genders

  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const schoolsPerPage = 10; // Number of schools to display per page

  // Fetch school data from JSON file
  useEffect(() => {
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        setSchools(data);
        setFilteredSchools(data); // Initialize with all schools

        // Extract unique countries, cities, curriculums, and genders
        const uniqueCountries = [...new Set(data.map((school) => school.country))];
        const uniqueCities = [...new Set(data.map((school) => school.city))];
        const uniqueCurriculums = [...new Set(data.map((school) => school.curriculum))];
        const uniqueGenders = [...new Set(data.map((school) => school.gender))];

        setCountries(uniqueCountries);
        setCities(uniqueCities);
        setCurriculums(uniqueCurriculums);
        setGenders(uniqueGenders);
      })
      .catch((error) => console.error("Error fetching school data:", error));
  }, []);

  // Filter schools based on search term and selected filters
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
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, region, country, city, curriculum, gender, schools]);

  // Calculate the current schools to display
  const indexOfLastSchool = currentPage * schoolsPerPage;
  const indexOfFirstSchool = indexOfLastSchool - schoolsPerPage;
  const currentSchools = filteredSchools.slice(indexOfFirstSchool, indexOfLastSchool);

  // Calculate total pages
  const totalPages = Math.ceil(filteredSchools.length / schoolsPerPage);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Number of page numbers to show
    const startPage = Math.max(1, currentPage - 2); // Start showing pages 2 before the current page
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1); // End page based on total pages

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
 }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

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
                    data-aos-delay=" 100"
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
                <option value="Middle East">Middle East</option>
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
                    {city}
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
                {currentSchools.map((school) => (
                  <div className="col-md-12" key={school.id}>
                    <Link to={`/school-details/${school.id}`}>
                      <div className="card mb-2">
                        <div className="row">
                          <div className="col-md-4 text-center align-content-center">
                            <img
                              src={school.image}
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
                                {school.city}, {school.country}
                              </p>
                              <p className="card-text">
                                <span className="fw-bold text-primary">
                                  Ratings:{" "}
                                </span>{" "}
                                {school.rating}{" "}
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
                                            </span>{" "}
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
                                            </span>{" "}
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
                                            </span>{" "}
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
                ))}
              </div>
              <div className="pagination d-block d-md-flex justify-content-center my-4">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="btn btn-outline-primary btn-sm mx-1"
                >
                  Previous
                </button>
                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`btn mx-1 btn-sm mt-3 mt-md-0 ${currentPage === number ? 'btn-primary' : 'btn-outline-primary'}`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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