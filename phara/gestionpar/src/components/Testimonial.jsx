import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import "../styles/testimonial.css";
import dev from '../assets/images/programmer.png' 
import dev2 from "../assets/images/programmer2.png";
import design from "../assets/images/graphic-designer.png";
import manager from "../assets/images/manager.png"
import tester from '../assets/images/tester.png'

function Testimonial() {
  const options = {
    items: 1,
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
                <img src={dev} alt="" />
                <div className="text">
                  “ Aouad Hajar "
                </div>
                <div className="nom">Notre programmer brillante</div>
                <div className="domaine">Digne de plus de 10 ans d'experience en web Dev</div>
              </div>
              <div className="contenu">
                <img src={dev2} alt="" />
                <div className="text">
                  “Kouthar EL Farissi"
                </div>
                <div className="nom">Notre Developper front-end</div>
                <div className="domaine">Avec des idées impréssionanteet 16 ans d'experience</div>
              </div>
              <div className="contenu">
                <img src={manager} alt="" />
                <div className="text">
                  “ Med Amine Temmar"
                </div>
                <div className="nom">Notre dirigeant</div>
                <div className="domaine">Plus de 15 ans en tant que chef de projet </div>
              </div>
              <div className="contenu">
                <img src={design} alt="" />
                <div className="text">
                  “ Zakaria Benabbes”
                </div>
                <div className="nom">Le concepteur de toute l'application </div>
                <div className="domaine">Des compétences extra-ordinaires en UI/UX design</div>
              </div>
              <div className="contenu">
                <img src={tester} alt="" />
                <div className="text">
                  “ Hammouti Soufiane”
                </div>
                <div className="nom">Notre testeur et deboggeur</div>
                <div className="domaine">Chasseur d'erreurs </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
