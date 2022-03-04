import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../styles/testimonial.css";
import image1 from "../assets/images/01-1.jpg";
import image2 from "../assets/images/03-1.jpg";
import image3 from "../assets/images/04-1.jpg";
import image4 from "../assets/images/04-2.jpg";
import image5 from "../assets/images/05-1.jpg";
import image6 from "../assets/images/07-1.jpg";
import image7 from "../assets/images/02-1.jpg";

function Testimonial() {
  const options = {
    items: 3,
    nav: false,
    dots: true,
    autoplay: true,
    loop: false,
    autoplayTimeout: 3000,
    margin: 20,

    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  };

  return (
    <section className="testimonial">
      <div className="overlay">
        <div className="max-width">
          <div className="title">Testimonials Clients</div>
          <div className="container">
            <OwlCarousel options={options}>
              <div className="customer">
                <div className="img-customer">
                  <img src={image1} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
              <div className="customer">
                <div className="img-customer">
                  <img src={image2} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
              <div className="customer">
                <div className="img-customer">
                  <img src={image3} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
              <div className="customer">
                <div className="img-customer">
                  <img src={image4} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
              <div className="customer">
                <div className="img-customer">
                  <img src={image5} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
              <div className="customer">
                <div className="img-customer">
                  <img src={image6} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
              <div className="customer">
                <div className="img-customer">
                  <img src={image7} alt="" />
                </div>
                <div className="text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Exercitationem, sapiente.
                </div>
                <div className="nom">Lorem, ipsum.</div>
                <div className="customer-name">customer</div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
