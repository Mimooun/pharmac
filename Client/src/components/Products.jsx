import React from 'react'
import '../styles/products.css'
import image from '../assets/images/01.jpg'
import {Link} from "react-router-dom"


function Products() {
  return (
    <div className='products'>
        <div className="max-width">
        <div className="title">Voir nos produits </div>
            <div className="prod">
                <div className="content">
                    <div className="text">Produits</div>
                    <div className="text1">Consultez notre catalogue ci-dessous</div>
                    <div className="button"><Link to="/Listep"><button>Consultez catalogue</button></Link></div>
                </div>
                <div className="img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products