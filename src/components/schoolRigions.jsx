import React from "react";
import { Link } from "react-router-dom";

const schoolRigions = () => {
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
          
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card text-center p-3">
                <h5 className="fw-bold mb-0">Asia</h5>
                <hr />
                <p className="text-muted mb-0">1,437 international schools</p>
              </div>
            </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">Europe</h5>
              <hr />
              <p className="text-muted mb-0">1,171 international schools</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">Middle East</h5>
              <hr />
              <p className="text-muted mb-0">664 international schools</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">Africa</h5>
              <hr />
              <p className="text-muted mb-0">552 international schools</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">North America</h5>
              <hr />
              <p className="text-muted mb-0">378 international schools</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">South America</h5>
              <hr />
              <p className="text-muted mb-0">263 international schools</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">Central America</h5>
              <hr />
              <p className="text-muted mb-0">189 international schools</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card text-center p-3">
              <h5 className="fw-bold mb-0">Australasia</h5>
              <hr />
              <p className="text-muted mb-0">91 international schools</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default schoolRigions;
