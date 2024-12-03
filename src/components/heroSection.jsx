import React from 'react';
import { Link } from 'react-router-dom';
import heroimage from '../assets/images/hero-img-1-min.jpg';	

const HeroSection = () => {
    return (
        <div className="untree_co-hero overlay" style={{ backgroundImage: `url(${heroimage})` }}>
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center">
                                <a href="#" data-fancybox data-aos="fade-up" data-aos-delay="0" className="caption mb-4 d-inline-block">solve your problem</a>
                                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">Find the best
                                    <br /> Schools for your child</h1>
                                <Link to="/schools" className="btn btn-outline-light btn-sm rounded-pill px-3">Find Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;