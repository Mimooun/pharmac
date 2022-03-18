import ReactStars from "react-rating-stars-component";
import Formnav from "./Formnav";
import Footer from "./Footer";
import React from "react";
import { render } from "react-dom";
import "../styles/detailsproduct.css";
import aspegic from "../assets/images/aspegic.jpg";
function Detailsproduct() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section className="detailsproduct">
        <Formnav />
      <div className="max-width">
        <div className="dtls-products">
          <div className="product">
            <div className="img-product">
              <img src={aspegic} alt="" />
            </div>
          </div>
          <div className="contenu">
            <div className="tit">
              Doliprane 1000 mg Douleurs et Fièvre 8 Comprimés{" "}
            </div>
            <div className="starts">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                activeColor="#ffd700"
              /> 
            </div>
            <div className="content">
              Doliprane 1000 mg est un antalgique, antipyrétique à base de
              paracétamol. Il est indiqué en cas de douleur et/ou fièvre, maux
              de tête, états grippaux, douleurs dentaires, courbatures, règles
              douloureuses, douleurs de l'arthrose.
            </div>
            <div className="prix">30DH</div>
            <div className="size">
               <span>Size :</span> 
                <div className="small">250 Mg</div>
                <div className="meduim">500 Mg</div>
                <div className="large">1000 Mg</div>
             </div>
             <div className="btn">
                 <button> Add TO CART</button>
             </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Detailsproduct;
