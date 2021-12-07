import React from 'react';
import { AiOutlineAim, AiFillEye, AiOutlineContacts } from "react-icons/ai";
import {MdOutlineMiscellaneousServices} from "react-icons/md";

function Aboutus(props) {
    return (
        <div>
            {/* ======= About Section ======= */}
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div className="content col-xl-5 d-flex align-items-stretch">
                <div className="content">
                  <h3>KNOW OUR TEAM</h3>
                  <p>
                  Brownrice Technology Pvt. Ltd. is a company established in 2078 B.S. Our team includes young, energetic minds who are 
                  passionate to bring clients imagination to reality.Brownrice Technology Pvt. Ltd. is a company established in 2078 B.S.
                   Our team includes young, energetic minds who are passionate to bring clients imagination to reality.Brownrice Technology Pvt.
                    Ltd. is a company established in 2078 B.S. Our team includes young, energetic minds who are passionate to bring clients 
                    imagination to reality.Brownrice Technology Pvt. Ltd. is a company established in 2078 B.S. Our team includes young, 
                    energetic minds who are passionate to bring clients imagination to reality.  </p>
                  <a href="#" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right" /></a>
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                      {/* <i className="bi bi-people" /> */}
                      <AiOutlineAim style={{fontSize:"50px",color:"#47AD4D"}}/>
                      <h4>Mission</h4>
                      <p>To enable people all around the globe realize their potential and bring change to the society.</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                      <AiFillEye style={{fontSize:"50px",color:"#47AD4D"}}/>
                      <h4>Vision</h4>
                      <p>Our vision is to create a better opportunity and growth in the society by helping our clients and business owners empower themselves with the technology.</p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                     <MdOutlineMiscellaneousServices style={{fontSize:"50px",color:"#47AD4D"}}/>
                      <h4>Services</h4>
                      <p>We offer a wide range of IT services including Web Development, App Development...<a href="#services">See more</a></p>
                    </div>
                    <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                     <AiOutlineContacts style={{fontSize:"50px",color:"#47AD4D"}}/>
                      <h4>Contact</h4>
                      <p>We can be reached anytime via:<br/>
                        Call: 9840032254 | 98871712695<br/>
                        Email: brownricetechnology@gmail.com
                      </p>
                    </div>
                  </div>
                </div>{/* End .content*/}
              </div>
            </div>
          </div>
        </section>{/* End About Section */} 
        </div>
    );
}

export default Aboutus;