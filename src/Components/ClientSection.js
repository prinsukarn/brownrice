import React from 'react';

function ClientSection(props) {
    return (
        <div>
                <main id="main">
        
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Portfolio</h2>
              <a href="#">View All From Us</a>
              {/* <p>So far we have got the opportunity to work with:</p> */}
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={100}>
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-web">Website</li>
                  <li data-filter=".filter-logo">Logo Design</li>
                  <li data-filter=".filter-ad"> Social Media Designs</li>
                </ul>
              </div>
            </div>
            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/globalsky.png" className="img-fluid" alt="Globalsky Abroad Education Consultancy Pvt. Ltd. " />
                  <div className="portfolio-info">
                    <h4>Globalsky Abroad Education Consultancy Pvt. Ltd.</h4>
                    <p>Educational Consultancy </p>
                    <div className="portfolio-links">
                      {/* <a href="http://globalsky.edu.np/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Globalsky Abroad Education Consultancy Pvt. Ltd."><i className="bx bx-plus" target="_blank"/></a> */}
                      <a href="http://globalsky.edu.np/" title="Visit Website"><i className="bx bx-link" target="_blank"/></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/clinicathome.png" className="img-fluid" alt="Clinic At Home" />
                  <div className="portfolio-info">
                    <h4>Clinic At Home</h4>
                    <p>E-clinic</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a> */}
                      <a href="https://clinicathome.com.np/" title="Visit Website"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/brsa.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>BRSA & Associates</h4>
                    <p>Accounting Firm Website</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus" /></a> */}
                      <a href="https://brsa.com.np/" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/avtimes.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>AV Times</h4>
                    <p>Watch Collection Logo</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus" /></a> */}
                      <a href="https://www.facebook.com/avtimesnp" title="View On Facebook"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/khadkaaccessories.png" className="img-fluid" alt="logo" />
                  <div className="portfolio-info">
                    <h4>Khadka Accessories</h4>
                    <p>Logo</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus" /></a> */}
                      <a href="https://www.facebook.com/Khadkasaccessories" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-logo">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/thepizzapalace.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>The Pizza Palace</h4>
                    <p>Fast Food Restaurant Logo</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus" /></a> */}
                      <a href="https://www.facebook.com/thepizzapalacenp" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-ad">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/mobilead.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Gadget Nepal Online</h4>
                    <p>Facebook Ad</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1"><i className="bx bx-plus" /></a> */}
                      <a href="https://www.facebook.com/gadgetnepalonlines" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-ad">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/queensapparelsad.png" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Queen's Apparels</h4>
                    <p>Women's Clothing Shop Ad</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3"><i className="bx bx-plus" /></a> */}
                      <a href="https://www.facebook.com/queensapparelspvt.ltd" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                </div>
              </div>
                  <div className="col-lg-4 col-md-6 portfolio-item filter-ad">
                <div className="portfolio-wrap">
                  <img src="assets/img/portfolio/perfectionad.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Perfection Beauty Hub</h4>
                    <p>Beauty Salon Ad</p>
                    <div className="portfolio-links">
                      {/* <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus" /></a> */}
                      <a href="https://www.facebook.com/PerfectionBeautyHub" title="More Details"><i className="bx bx-link" /></a>
                    </div>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Portfolio Section */}
     
    
      </main>{/* End #main */}
        </div>
    );
}

export default ClientSection;