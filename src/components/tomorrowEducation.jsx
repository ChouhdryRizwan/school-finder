import React from 'react';
import main from '../assets/images/img-school-1-min.jpg';

const TomorrowEducation = () => {
    return (
        <div 
            className="untree_co-section pt-0 bg-img overlay" 
            style={{ backgroundImage: `url(${main})` }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-7">
                        <h2 className="text-white mb-3" data-aos="fade-up" data-aos-delay="0">
                            Education for Tomorrow's Leaders
                        </h2>
                        <p className="text-white mb-4" data-aos="fade-up" data-aos-delay="100">
                        Whether you’re searching for top institutions in your country or exploring world-class schools across the globe, our platform is designed to make your search effortless and informed.
                        </p>
                        <p>
                            <a href="#" className="btn btn-outline-light rounded-5 px-4" data-aos="fade-up" data-aos-delay="200">
                                Find Schools
                            </a>
                        </p>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default TomorrowEducation;