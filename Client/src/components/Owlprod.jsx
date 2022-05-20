import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "../styles/owlprod.css";
import img1 from "../assets/images/migralgine-removebg.png";
import img2 from "../assets/images/doli-copybg.png";
import img3 from "../assets/images/aspeg.png";
import img4 from "../assets/images/sanofi-removebg.png";
import img5 from "../assets/images/doli-copybg.png";

function Owlprod() {
  const options = {
    items: 3,
    nav: false,
    dots: false,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    margin: 20,
    margin: 10,
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
    <section id="test" className="owlprod">
      <div className="overlay">
        <div className="max-width">
          <div className="container">
            <OwlCarousel options={options}>
              <div className="contenu-img">
                <img src={img1} alt="" />
                <div className="domaine">Les gélules Migralgine sont ici</div>
              </div>
              <div className="contenu-img">
                <img src={img2} alt="" />
                <div className="domaine">
                  Doliprane importée de l'étranger 
                </div>
              </div>
              <div className="contenu-img">
                <img src={img3} alt="" />
                <div className="domaine">
                  Aspegic nouveau format 2022{" "}
                </div>
              </div>
              <div className="contenu-img">
                <img src={img4} alt="" />
                <div className="domaine">
                  Aspegic 70 comprimés 
                </div>
              </div>
              <div className="contenu-img">
                <img src={img5} alt="" />
                <div className="domaine">Doliprane en sachets !! </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Owlprod;
