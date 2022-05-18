import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React ,  { useEffect, useState, useRef } from 'react';
import logo from "../Dash/assets/SOSpharma2.png";
import "../../styles/Dash/down.css";
import Axios from "axios";

class ComponentToPrint extends React.Component {
  
  render() {
    return   <section className='down'>
    <div className='container' >
        <div className="img">
            <img src={logo} alt="" />
        </div>
        <div className="title_factue">
            Facture
        </div>
        <div className="donnes">
            <div className="sos">
                <div className="adresse"> <span>Adresse</span> : 11/17 Rue Ofkir Oujda Maroc</div> <br />
                <div className="tel"> <span>Telephone</span> : 05 36 71 05 68</div> <br />
                <div className="email"> <span>Email</span> : xxxxxx@gmail.com</div> <br />
                <div className="site"> <span>Site</span> : sospharma.ma</div> <br />
            </div>
            <div className="perso">
            <div className="nomperso"> <span>Adresse</span> : xxxxxxxx</div> <br />
                <div className="telperso"> <span>Telephone</span> : xxxxxxxx</div> <br />
                <div className="emailperso"> <span>Email</span> : xxxxxxxxxxxx@gmail.com</div> <br />
                
            </div>
            
        </div>
        
    </div>
</section>
  }
 }
 export default class MyComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  render() {
    // const [utilisateur, setutilisateur] = useState([""]);

    // useEffect(() => {
    //   Axios.get("http://localhost:3001/login").then((response) => {
    //     setutilisateur(response.data.id);
    //   });
     
    // }, []);
    return (
      <React.Fragment >
        <ComponentToPrint ref={this.componentRef} />
        <div className='btn'>
          <button  style={{marginTop:"2px" , display :"block" , margin:"auto"}} onClick={() => exportComponentAsJPEG(this.componentRef)}>
            Export As JPEG
          </button>
          
        </div>
         
      </React.Fragment>
    );
  }
 }