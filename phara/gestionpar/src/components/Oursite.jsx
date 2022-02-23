import React from 'react'
 import '../styles/oursite.css'
 import image1 from '../assets/images/man.png'
 import image2 from '../assets/images/light-bulb.png'
 import image3 from '../assets/images/life-insurance.png'

function Oursite() {
    return (
        <section className="cards" id="sect2">
        <div className="title" data-aos="fade-down-right">
          <h1>Our services </h1>
        </div> 
        <div className="cards-content">
          <div className="card" data-aos="fade-down-right">
            <div className="container">
              <div className="img-container">
                <img src={image1} alt="" />
              </div>
              <div className="txt-container">
                <h2>Save Money</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
  
          <div className="card" data-aos="fade-down-right">
            <div className="container">
              <div className="img-container">
                <img src={image2} alt="" />
              </div>
              <div className="txt-container">
                <h2>Stress Less</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
  
          <div className="card" data-aos="fade-down-right">
            <div className="container">
              <div className="img-container">
                <img src={image3} alt="" />
              </div>
              <div className="txt-container">
                <h2>Save Time</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Oursite;
