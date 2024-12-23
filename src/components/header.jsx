import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <nav className="site-nav mb-5">
        <div className="pb-2 top-bar mb-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-6 col-lg-9">
                <Link to="#" className="small mr-3">
                  <span className="icon-question-circle-o mr-2"></span>
                  <span className="d-none d-lg-inline-block"> Have a questions ..? </span>
                </Link>
                <Link to="#" className="small mr-3">
                  <span className="icon-phone mr-2"></span>
                  <span className="d-none d-lg-inline-block"> 00 00 000 000 </span>
                </Link>
                <Link to="#" className="small mr-3">
                  <span className="icon-envelope mr-2"></span>
                  <span className="d-none d-lg-inline-block"> info@schoolfinder.com </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-nav js-sticky-header">
          <div className="container position-relative">
            <div className="site-navigation text-center">
              <Link to="/" className="logo menu-absolute m-0">
                School Finder<span className="text-dark">.</span>
              </Link>
              <ul className="js-clone-nav d-none d-lg-inline-block site-menu">
                <li className={isActive("/") ? "active text-primary" : ""}>
                  <Link to="/">Home</Link>
                </li>
                <li className={isActive("/#about") ? "active text-primary" : ""}>
                  <a href="#about">About</a>
                  {/* <Link to="#about">About</Link> */}
                </li>
                <li className={isActive("/schools") ? "active text-primary" : ""}>
                  <Link to="/schools">Schools</Link>
                </li>
                <li className={isActive("/#contact") ? "active text-primary" : ""}>
                  <a href="#contact">Contact</a>
                  {/* <Link to="/contact">Contact</Link> */}
                </li>
              </ul>
              <Link
                to="/schools"
                className="btn-book btn btn-secondary btn-sm menu-absolute rounded-pill d-none d-lg-inline-block"
              >
                Find Schools
              </Link>
              <Link
                to="#"
                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                data-toggle="collapse"
                data-target="#main-navbar"
              >
                <span></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
