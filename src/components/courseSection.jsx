import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CourseSection = () => {
  const { country } = useParams();
  const [locationData, setLocationData] = useState({
    country: "",
    city: "",
    state: "",
  });
  const [schools, setSchools] = useState([]);
  const [visibleSchools, setVisibleSchools] = useState(8); // Initially show 8 schools
  const [loading, setLoading] = useState(true); // To track loading state

  // Fetch the user's current location
  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/geo.json")
      .then((response) => response.json())
      .then((data) => {
        setLocationData({
          country: data.country,
          city: data.city,
          state: data.region,
        });
        fetchSchools(data.country, data.city); // Fetch schools based on location
      })
      .catch((error) => console.error("Error fetching location data:", error));
  }, []);

  // Fetch schools based on country and city
  const fetchSchools = (country, city) => {
    fetch("/schools_data.json")
      .then((response) => response.json())
      .then((data) => {
        let filteredSchools;
        // Filter schools by city
        filteredSchools = data.filter((school) => school.city === city);

        setSchools(filteredSchools);
        setLoading(false); // Set loading to false once schools data is fetched
      })
      .catch((error) => {
        console.error("Error fetching schools data:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  };

  // Function to truncate school name after the fourth word
  const truncateSchoolName = (name) => {
    const words = name.split(" ");
    if (words.length > 3) {
      return words.slice(0, 3).join(" ") + " ...";
    }
    return name;
  };

  // Show more schools when the button is clicked
  const handleSeeMore = () => {
    setVisibleSchools((prevVisible) => prevVisible + 4); // Increase the number of visible schools
  };

  return (
    <div className="untree_co-section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-7 text-center"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <h2 className="line-bottom text-center">
              Schools in&nbsp;
              <span className="text-purple-500">{locationData.city}&nbsp;</span>
              ,
              <span className="text-purple-500">
                &nbsp;{locationData.country}
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <p className="text-center">Loading schools...</p>
          ) : schools.length === 0 ? (
            <p className="text-center text-danger">
              We are currently working on our database, your area's schools will
              be uploaded soon.
            </p>
          ) : (
            schools.slice(0, visibleSchools).map((school) => (
              <div
                className="course-card col-12 col-sm-6 col-md-6 col-lg-3 mt-5 mb-lg-0"
                key={school.id}
              >
                <div className="custom-media">
                  <Link to={`/school/${school.id}`}>
                    <img
                      src={school.image}
                      alt={school.name}
                      className="card-img"
                    />
                  </Link>
                  <div className="custom-media-body">
                    <h3>{truncateSchoolName(school.name)}</h3>
                    <span>{school.city || "N/A"}</span> ,{" "}
                    <span>{school.country || "N/A"}</span>
                    <div className="justify-content-between mt-2">
                      <div className="text-primary">
                        <span className="uil uil-book-open"></span>{" "}
                        <span>{school.curriculum || "N/A"}</span>
                      </div>
                      <div className="review mt-2">
                        <span class Name="icon-star"></span>{" "}
                        <span>{school.rating || "N/A"}</span>
                      </div>
                    </div>
                    <div className="border-top justify-content-between pt-3 mt-3 align-items-center">
                      <span className="">{school.fee || "N/A"}</span>
                      <div className="text-center mt-3">
                        <Link to={`/school-details/${school.id}`}>
                          <button className="btn btn-outline-primary btn-sm rounded-5 p-2">
                            View School
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {visibleSchools < schools.length && ( // Show button only if there are more schools to show
          <div className="text-center mt-4">
            <button
              onClick={handleSeeMore}
              className="bg-white px-4 py-2 mt-6 rounded-lg border-2 border-transparent hover:bg-purple-500 hover:text-white border-purple-500 transition duration-200"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSection;
