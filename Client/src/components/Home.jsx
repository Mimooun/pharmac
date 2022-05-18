import React from 'react'
import '../styles/home.css';
import Form from './Form'
function Home() {
    function scrollToTestDiv(){
        const divElement = document.getElementById('test');
        divElement.scrollIntoView({ behavior: 'smooth' , block :'start'});
      }
    return (
        <section id="test3" className="home">
             <div className="max-width">
                <div className="container">
                    <div className="text">
                        <div className="text1">Wees will Help You!</div>
                        <div className="text2">To Live Healthy Life</div>
                        <div className="text3">Our mission is to build a healthier tomorrow for patients with progressive non-viral liver diseases  </div>
                    </div>
                    <button className="order" onClick={scrollToTestDiv}> Découvrir maintenant</button>
                </div>
            </div> 
        </section>
    )
}

export default Home;
