import React from "react";
import "../styles/chose.css";
import img1 from "../images/diamant.png";
import img2 from "../images/cloud.png";
import img3 from "../images/satisfaction.png";
import img4 from "../images/price-tag.png";
function Chose() {
  return (
    <section className="chose">
      <div className="max-width">
        <div className="container">
          <div className="tit">why Chose</div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <div className="title"> Newest Technologies  </div>
              <div className="txt">Consetetur sadipscing elitr diam nonumy eirmod tempor invidunt. </div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="text">
              <div className="title">Taking Care of Nature </div>
              <div className="txt">Ut labore et dolore magna aliquyam erat sed diam voluptua </div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img3} alt="" />
            </div>
            <div className="text">
              <div className="title">Fair Prices</div>
              <div className="txt">At vero eos et accusam ejusto duo dolores et ea rebum clita gubergren.</div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img4} alt="" />
            </div>
            <div className="text">
              <div className="title"> High Satisfaction  </div>
              <div className="txt">Nosea takimata sanctus est lorem ipsum dolor sit amet. </div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <div className="title"> Company founded </div>
              <div className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Laboriosam. </div>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="text">
              <div className="title"> Company founded </div>
              <div className="txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Laboriosam. </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chose;
