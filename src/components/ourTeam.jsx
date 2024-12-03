import React from 'react';

const OurTeam = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="untree_co-hero overlay" style={{ backgroundImage: "url('images/img-school-3-min.jpg')" }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100">School Staff</h1>
                                    <div className="mb-5 text-white desc mx-auto" data-aos="fade-up" data-aos-delay="200">
                                        <p>Another free template by <a href="https://untree.co/" target="_blank" rel="noopener noreferrer" className="link-highlight">Untree.co</a>. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live.</p>
                                    </div>
                                    <p className="mb-0" data-aos="fade-up" data-aos-delay="300">
                                        <a href="#" className="btn btn-secondary">Explore courses</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> {/* /.row */}
                </div> {/* /.container */}
            </div> {/* /.untree_co-hero */}

            {/* Staff Section */}
            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                            <div className="staff text-center">
                                <div className="mb-4"><img src="images/staff_1.jpg" alt="Mina Collins" className="img-fluid" /></div>
                                <div className="staff-body">
                                    <h3 className="staff-name">Mina Collins</h3>
                                    <span className="d-block position mb-4">Teacher in Math</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="social">
                                        <a href="#" className="mx-2"><span className="icon-facebook"></span></a>
                                        <a href="#" className="mx-2"><span className="icon-twitter"></span></a>
                                        <a href="#" className="mx-2"><span className="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="staff text-center">
                                <div className="mb-4"><img src="images/staff_2.jpg" alt="Anderson Matthew" className="img-fluid" /></div>
                                <div className="staff-body">
                                    <h3 className="staff-name">Anderson Matthew</h3>
                                    <span className="d-block position mb-4">Teacher in Music</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="social">
                                        <a href="#" className="mx-2"><span className="icon-facebook"></span></a>
                                        <a href="#" className="mx-2"><span className="icon-twitter"></span></a>
                                        <a href="#" className="mx-2"><span className="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="staff text-center">
                                <div className="mb-4"><img src="images/staff_3.jpg" alt="Cynthia Misso" className="img-fluid" /></div>
                                 <div className="staff-body">
                                    <h3 className="staff-name">Cynthia Misso</h3>
                                    <span className="d-block position mb-4">Teacher English</span>
                                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                    <div className="social">
                                        <a href="#" className="mx-2"><span className="icon-facebook"></span></a>
                                        <a href="#" className="mx-2"><span className="icon-twitter"></span></a>
                                        <a href="#" className="mx-2"><span className="icon-linkedin"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> {/* /.row */}
                </div> {/* /.container */}
            </div> {/* /.untree_co-section */}
        </div>
    );
};

export default OurTeam;