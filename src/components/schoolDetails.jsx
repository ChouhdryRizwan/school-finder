import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import heroimage from "../assets/images/hero-img-1-min.jpg";
import MapComponent from "./MapComponent";

const SchoolDetails = () => {
  const { id } = useParams(); // Extract school ID from URL
  const [school, setSchool] = useState(null); // State to hold school data
  const [loading, setLoading] = useState(true); // To track loading state
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Fetch school data based on the ID
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedSchool = data.find((school) => school.id == id); // Find school by ID
        setSchool(selectedSchool); // Set the school data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching school data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, [id]); // Dependency array with ID

  if (loading) {
    return <p className="text-center">Loading school details...</p>; // Loading state
  }

  if (!school) {
    return <p className="text-center text-danger">School not found.</p>; // Handle case where school is not found
  }

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
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
                    {school.name} {/* Display school name */}
                  </h1>
                  <div
                    className="text-white mx-auto"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <p>
                      {school.city}, {school.country}
                    </p>{" "}
                    {/* Display location */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <div className="align-items-center d-block d-md-flex text-md-start text-center">
                  <img
                    src={school.image}
                    className="single-card-logo-img"
                    alt={school.name}
                  />
                  <h2 className="ml-3 mt-3 mt-md-0">{school.name}</h2>
                </div>
                <div className="mt-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span className="fw-bold">Address:</span>{" "}
                      {school.address || "N/A"} , {school.city || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Founded:</span>{" "}
                      {school.founded || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Curriculum:</span>{" "}
                      {school.curriculum || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Rating:</span>{" "}
                      {school.rating || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Fee:</span>{" "}
                      {school.fee || "N/A"}
                    </li>
                    <li className="list-group-item">
                      <span className="fw-bold">Gender:</span>{" "}
                      {school.gender || "N/A"}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <MapComponent address={school.address} />
                {/* <img
                  src={school.image}
                  alt={school.name}
                  className="card-img h-100 w-100"
                /> */}
              </div>{" "}
            </div>
            <div className="row mt-3 mx-1">
              <h4 className="fw-bold">Details</h4>
              <p>
              {isExpanded
                  ? school.detail
                  : school.detail.substring(0, 800) + "..."}
                {isExpanded ? (
                  <span onClick={toggleReadMore}
                  className="text-primary fw-bold pointer-event">{" "}Read Less</span>    
                ) : (
                  <span onClick={toggleReadMore}
                  className="text-primary fw-bold pointer-event">{" "}Read More</span> 
                )}
                {/* {school.detail || "No additional details available."}{" "} */}
                {/* Display school details */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolDetails;
