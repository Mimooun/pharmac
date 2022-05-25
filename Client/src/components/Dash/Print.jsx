import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import React from 'react';
import Down from './Down';
import "../../styles/Dash/print.css";
class ComponentToPrint extends React.Component {
 render() {
   return <div><Down></Down> </div>;
 }
}
export default class MyComponent extends React.Component {
 constructor(props) {
   super(props);
   this.componentRef = React.createRef();
 }

 render() {
   return (
     <React.Fragment>
       <ComponentToPrint ref={this.componentRef} />
       
       <div className='btnexport'>
          <button  style={{marginTop:"2px" , display :"block" , margin:"auto"}} onClick={() => exportComponentAsJPEG(this.componentRef)}>
          Télécharger Facture
          </button>
          
        </div>
     </React.Fragment>
   );
 }
}