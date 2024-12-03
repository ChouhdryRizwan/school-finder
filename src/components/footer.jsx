import React from 'react';

const Footer = () => {
    return (
        <div className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 pr-3">
                        <div className="widget">
                            <h3 className='fs-5'>About Us<span className='text-dark'>.</span></h3>
                            <p>At School Finder, we believe that finding the right school is the foundation of a successful future. Whether you’re searching for top institutions in your country or exploring world-class schools across the globe, our platform is designed to make your search effortless and informed.</p>
                        </div>
                        <div className="widget">
                            <h3>Connect</h3>
                            <ul className="list-unstyled social">
                                {/* <li><a href="#"><span className="icon-instagram"></span></a></li> */}
                                <li><a href="#"><span className="icon-twitter"></span></a></li>&nbsp; &nbsp;
                                <li><a href="#"><span className="icon-facebook"></span></a></li>&nbsp;&nbsp;&nbsp;
                                <li><a href="#"><span className="icon-linkedin"></span></a></li>
                                {/* <li><a href="#"><span className="icon-pinterest"></span></a></li> */}
                                {/* <li><a href="#"><span className="icon-dribbble"></span></a></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="widget">
                            <h3 className='fs-5'>Links</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Schools</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 ml-auto">
                        <div className="widget">
                            <h3 className='fs-5'>Rigions</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">Asia</a></li>
                                <li><a href="#">Europe</a></li>
                                <li><a href="#">Middle East</a></li>
                                <li><a href="#">Africa</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 ml-auto">
                        <div className="widget">
                            <h3 className='fs-5'>Countries</h3>
                            <ul className="list-unstyled float-left links">
                                <li><a href="#">UAE</a></li>
                                <li><a href="#">Kuwait</a></li>
                                <li><a href="#">Oman</a></li>
                                <li><a href="#">Iran</a></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="col-lg-2">
                        <div className="widget">
                            <h3>Contact</h3>
                            <address>43 Street abc town, Karachi 3910</address>
                            <ul className="list-unstyled links">
                                <li><a href="tel://11234567890">11:00 AM - 8:00 PM</a></li>
                                <li><a href="tel://11234567890">+00 00 000 000</a></li>
                                <li><a href="mailto:info@mydomain.com">info@schoolfinder.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved &mdash; School Finder</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;