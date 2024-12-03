import React from "react";
import HeroSection from "./heroSection";
import TopCategories from "./topCategories";
import CourseSection from "./courseSection";
import SchoolCountries from "./schoolCountries";
import SchoolRigions from "./schoolRigions";
import AboutUs from "./aboutUs";
import TomorrowEducation from "./tomorrowEducation";

import ContactUs from "./contactUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopCategories />
      <CourseSection />
      <SchoolRigions/>
      <TomorrowEducation />
      <SchoolCountries />
      <AboutUs />
      <ContactUs/>
    </div>
  );
};

export default Home;
