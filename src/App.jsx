import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import SchoolsPage from "./components/schoolsPage";
import Home from "./components/Home";
import "./assets/css/style.css";
// import "./assets/js/jquery-3.4.1.min.js";
// import "./assets/js/custom.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SchoolDetails from "./components/schoolDetails.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/our-team" element={<OurTeam />} /> */}
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/school-details/:id" element={<SchoolDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;