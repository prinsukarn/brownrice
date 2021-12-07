import React from 'react';
import GraphicDesign from './GraphicDesign';

function Service(props) {
    return (
        <div>
            {/* ======= Services Section ======= */}
        <section id="services" className="services section-bg ">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Services</h2>
              {/* <p>At Brownrice Technology, we offer wide range of servicess including the following:</p> */}
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <i className="bi bi-bezier" />
                  <h4><a href="#">Graphic Design</a></h4>
                  <p>Graphic design is a great way to show off how your brand thinks one step ahead of the competition.
                     At Brownrice Technology, we offer a wide range of graphic design services... <a href={<GraphicDesign/>}>See More</a></p>
                  
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={200}>
                  <i className="bi bi-currency-exchange" />
                  <h4><a href="#">Digital Marketing</a></h4>
                  <p>We help you reach your targeted audience in a cost-effective and measurable way. Our digital marketing services includes Search Engine Optimization, ...<a href="/">See more</a> </p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={300}>
                  <i className="bi bi-globe" />
                  <h4><a href="#">Web Development</a></h4>
                  <p>We  design, build, support, and evolve all types of web-based software to deliver websites, 
                    web portals, and other web solutions that bring about digital transformation and enhance business workflows....<a href="#">See more</a></p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={400}>
                  <i className="bi bi-phone" />
                  <h4><a href="#">App Development</a></h4>
                  <p> Our app development services includes expert business analysis, design and development of your mobile application from idea to launch,
                     integrating the new product 
                     {/* into your infrastructure and providing further optimization and scale-up on demand */}
                     ...<a href="#">See more</a></p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={500}>
                  <i className="bi bi-people" />
                  <h4><a href="#">IT Consultation</a></h4>
                  <p> AT Brownrice Technology, our IT experts support your IT initiatives byproviding strategic, architectural, operational and implementation planning....<a href="#">See more</a></p>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="icon-box" data-aos="fade-up" data-aos-delay={600}>
                  <i className="bi bi-hdd-network" />
                  <h4><a href="#">Networking</a></h4>
                  <p>From virtualization to cloud computing to social networks, networking is at the center of the revolution
                     in how people communicate and companies leverage operational flexibility and efficiency....<a href="#"> See more</a> </p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Services Section */}
        </div>
    );
}

export default Service;