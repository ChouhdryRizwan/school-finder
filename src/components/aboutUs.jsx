import React from "react";
import school4 from "../assets/images/img-school-4-min.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="untree_co-section bg-light" id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5 mb-5">
            <h2
              className="line-bottom mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              About Us
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              At School Finder, we believe that finding the right school is the
              foundation of a successful future. Whether you’re searching for
              top institutions in your country or exploring world-class schools
              across the globe, our platform is designed to make your search
              effortless and informed.
            </p>
            <ul
              className="list-unstyled ul-check mb-4 primary"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <li>Horizons of learning</li>
              <li>Gateway to growth</li>
              <li>Education beyond borders</li>
              <li>Discover, learn, excel</li>
            </ul>

            <p data-aos="fade-up" data-aos-delay="200">
              <Link to="/schools">
                <button className="btn btn-outline-primary mr-1 rounded-5 px-3">
                  Find Schools
                </button>
              </Link>
            </p>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <img src={school4} alt="Image" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
