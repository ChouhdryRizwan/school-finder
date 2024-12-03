import React from "react";

const ContactUs = () => {
  return (
    <div className="untree_co-section" id="contact">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <h2 className="line-bottom text-center">Leave a Message</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7 " data-aos="fade-up" data-aos-delay="200">
            <form action="#">
              <div className="row">
                <div className="col-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-12 mb-3">
                  <textarea
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-outline-primary rounded-5 px-3"
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className="col-lg-4 mb-5 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact-info">
              <div className="address mt-4">
                <i className="icon-room"></i>
                <h4 className="mb-2">Location:</h4>
                <p>43 Street abc town, Karachi 3910</p>
              </div>

              <div className="open-hours mt-4">
                <i className="icon-clock-o"></i>
                <h4 className="mb-2">Open Hours:</h4>
                <p>
                  Sunday-Friday:
                  <br />
                  11:00 AM - 8:00 PM
                </p>
              </div>

              <div className="email mt-4">
                <i className="icon-envelope"></i>
                <h4 className="mb-2">Email:</h4>
                <p>info@schoolfinder.com</p>
              </div>

              <div className="phone mt-4">
                <i className="icon-phone"></i>
                <h4 className="mb-2">Call:</h4>
                <p>00 00 000 000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
