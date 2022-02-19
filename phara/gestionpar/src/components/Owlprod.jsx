import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../styles/owlprod.css";
import img1 from '../assets/images/25.jpg'
import img2 from '../assets/images/24.jpg'
import img3 from '../assets/images/23.jpg'
import img4 from '../assets/images/22.jpg'
import img5 from '../assets/images/21.jpg'
import img6 from '../assets/images/20.jpg'
import img7 from '../assets/images/19.jpg'

function Owlprod() {
  const options = {
    items: 3,
    nav: true, 
    dots: false,
    rewind: true,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
  };

  return (
    <section id ="sect3" className="testimonial">
      <div className="overlay">
        <div className="max-width">
          <div className="container">
            <OwlCarousel options={options}>
              <div className="contenu">
                <img src={img1} alt="" />
                <div className="domaine">Digne de plus de 10 ans d'experience en web Dev</div>
              </div>
              <div className="contenu">
                <img src={img2} alt="" />
                <div className="domaine">Avec des idées impréssionanteet 16 ans d'experience</div>
              </div>
              <div className="contenu">
                <img src={img3} alt="" />
                <div className="domaine">Plus de 15 ans en tant que chef de projet </div>
              </div>
              <div className="contenu">
                <img src={img4} alt="" />
                <div className="domaine">Des compétences extra-ordinaires en UI/UX design</div>
              </div>
              <div className="contenu">
                <img src={img5} alt="" />
                <div className="domaine">Chasseur d'erreurs </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Owlprod;