import React from "react";
import "../styles/chose.css";
import img1 from "../assets/images/fast-delivery.png";
import img2 from "../assets/images/trust.png";
import img3 from "../assets/images/high-quality.png";
import img4 from "../assets/images/price-tag.png";
import img5 from "../assets/images/creative.png";
function Chose() {
  return (
    <section id ="test2" className="chose">
      <div className="max-width">
        <div className="container">
          <div className="tit">Pourquoi nous ?</div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <div className="title"> Service le plus rapide </div>
              <div className="txt">
                {" "}
                Consetetur sadipscing elitr diam nonumy eirmod tempor invidunt.{" "}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <div className="title">Haute fiabilité </div>
              <div className="txt">
                {" "}
                La confiance des clients est notre priorité pour offrir les meilleures services possibles {" "}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="text">
              <div className="title">Meilleur catalogue</div>
              <div className="txt">
                {" "}
               La disponibilité des médicaments est notre point fort 
              </div>
            </div>
          </div>
       
        
        </div>
      </div>
    </section>
  );
}

export default Chose;
