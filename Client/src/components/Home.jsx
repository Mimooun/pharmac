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
                        <div className="text1">On est présents 7j/7j</div>
                        <div className="text2">Service le plus rapide au pays</div>
                        <div className="text3">Notre mission est de facilité l'approvisionnement chez nos clients </div>
                    </div>
                    <button className="order" onClick={scrollToTestDiv}> Découvrir maintenant</button>
                </div>
            </div> 
        </section>
    )
}

export default Home;
