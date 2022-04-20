import React from 'react'
import '../../styles/Dash/formi.css'

function Formi() {
  return (
    <section className='fields'>
        <div className="form-shape">
            <div className="input-shape">
                <div className="lefty">
                <input type="text" placeholder="id Produit" />
                <input type="text" placeholder="id Categorie" />
                <input type="text" placeholder="Libelle produit" />
                <input type="text" placeholder="Forme" />
                </div>
                <div className="righty">
                <input type="text" placeholder="Modele" />
                <input type="text" placeholder="Code produit" />
                <input type="text" placeholder="Quantite" />
                <input type="text" placeholder="Prix" />
                </div>
           
                
            </div>
        </div>
    </section>
  )
}

export default Formi