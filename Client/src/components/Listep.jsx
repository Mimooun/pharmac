import React  , {useState} from "react";
import OwlCarousel from 'react-owl-carousel2';
import "../styles/listep.css";
import doliprane from "../assets/images/doli.png";
import aspegic from "../assets/images/aspeg.png";
import gelule from "../assets/images/gélulues.jpg";
import { Link } from "react-router-dom";
function Listep() {
    const options = {
      className:"owl-theme",
        items: 5,
        nav: false,
        dots:true,
        autoplay: true,
        loop: true,
        autoplayTimeout: 3000,
        margin: 0,
        margin: 0,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 3,
          },
        },
      };

    const [activeCategorie, setActiveCategorie] = useState(1);
    
  return (
    <section className="liste-product">
      <div className="max-width">
        <div className="title">Products</div>
       <div className="type">
            <div className="type-medicament">
                <div className="comprime" onClick={() => {setActiveCategorie(1)}}>Le comprimé</div>
                <div className="gelule" onClick={() => {setActiveCategorie(2)}}>La gélule</div>
                <div className="injectables" onClick={() => {setActiveCategorie(3)}}>Injectables</div>
                <div className="inhalees" onClick={() => {setActiveCategorie(4)}}>Inhalées</div>
                <div className="dermiques" onClick={() => {setActiveCategorie(5)}}>Dermiques</div>
                <div className="liquide" onClick={() => {setActiveCategorie(6)}}>Liquide</div>
              </div>
       </div>
        
     
        
        
        <div className="medicaments" style={{display:activeCategorie === 1? "grid": 'none'}}>
        <Link to="/Detailsproduct">
          <div className="medicament">
            <div className="img-medicament">
              <img src={doliprane} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>
          </Link>
          
          <div className="medicament">
            <div className="img-medicament">
              <img src={aspegic} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>
          

          <div className="medicament">
            <div className="img-medicament">
              <img src={doliprane} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>

          <div className="medicament">
            <div className="img-medicament">
              <img src={aspegic} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>

          <div className="medicament">
            <div className="img-medicament">
              <img src={doliprane} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>
          <div className="medicament">
            <div className="img-medicament">
              <img src={doliprane} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>
          <div className="medicament">
            <div className="img-medicament">
              <img src={doliprane} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>
          <div className="medicament">
            <div className="img-medicament">
              <img src={doliprane} alt="" />
            </div>
            <div className="title-medicament">Doliprane</div>
            <div className="prix">10.00</div>
          </div>
        </div>
        {/*fin products comprimer  */}
        {/* owl best saller*/}
        
        <div className="best-medicaments" style={{display:activeCategorie === 1? "block": 'none'}}>
        <div className="best-saller">Best Saller</div>
        <OwlCarousel options={options} >
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={doliprane} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={aspegic} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={doliprane} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={aspegic} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={doliprane} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={aspegic} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={doliprane} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={aspegic} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        </OwlCarousel>
      </div>
      </div>

      {/*fin products gelule  */}
      <div className="max-width">
      <div className="medicaments" style={{display:activeCategorie === 2? "grid": 'none'}}>
        
        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
      </div>

       {/* owl best saller*/}
       <div className="best-medicaments" style={{display:activeCategorie === 2? "block": 'none'}}>
        <div className="best-saller">Best Saller</div>
        <OwlCarousel options={options} >
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>

        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        <div className="best-medicament">
          <div className="img-medicament">
            <img src={gelule} alt="" />
          </div>
          <div className="title-medicament">Doliprane</div>
          <div className="prix">10.00</div>
        </div>
        </OwlCarousel>
      </div>
      </div>
    </section>
  );
}

export default Listep;
