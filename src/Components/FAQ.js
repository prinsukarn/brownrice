import React from 'react';

function FAQ(props) {
    return (
        <div>
              {/* ======= Frequently Asked Questions Section ======= */}
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Frequently Asked Questions</h2>
            </div>
            <ul className="faq-list accordion" data-aos="fade-up">
              <li>
                <a data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">Where are you located?? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-x icon-close" /></a>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Office Address: Koteshwor-32, Kathmandu
                  </p>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq2" className="collapsed">What are your contact details? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-x icon-close" /></a>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>Contact Number: +977-9840032254 | +977-9887172695</p><br/>
                  <p>Email: brownricetechnology@gmail.com</p><br/>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq3" className="collapsed">What services do you offer? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-x icon-close" /></a>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <ul>
                  <li>App Development</li>
                  <li>Content Writing</li>
                    <li>Graphic Designing</li>
                    <li>Digital Marketing</li>
                    <li>Domain Registration & Hosting</li>
                    <li>IT Consultation</li>
                    <li>Networking</li>           
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" data-bs-target="#faq4" className="collapsed">How do I make the payment? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-x icon-close" /></a>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
             You can pay us via esewa, khalti, ImePay as well as mobile banking.    </p>
                </div>
              </li>
            </ul>
          </div>
        </section>{/* End Frequently Asked Questions Section */}
        </div>
    );
}

export default FAQ;