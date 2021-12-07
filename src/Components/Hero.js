import React from 'react';

function Hero(props) {
    return (
        <div>
            {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay={100}>
          <div className="row">
            <div className="col-xl-6">
              <h1>Expect Excellence with <h1 style={{color:"#47AD4D"}}>Brownrice Technology</h1></h1>
              {/* <h2>We are team of enthusiastic professionals .</h2> */}
              <a href="#about" className="btn-get-started scrollto">Get Started</a>
            </div>
             {/* <div className="col-xl-6">
              <img src="./assets/img/hero.gif" href="" width="100%"></img>
            </div> */}
          </div>
        </div>
      </section>{/* End Hero */}
        </div>
    );
}

export default Hero;