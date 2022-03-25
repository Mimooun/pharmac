
import React, { useEffect, useState } from "react";
import Axios from "axios";

import "../styles/panier.css";
import doli from "../assets/images/shopping-bag.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Panier() {
  const [produitPanier, setProduitPanier] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/produitspanier").then((response) => {
      setProduitPanier(response.data);
    });
  }, []);

  const [quantity, setQuantity] = useState(1);
  return (
    <section className="sec">
      <div className="cart">
        <div className="title">Your products</div>
        <div className="cards">
          {produitPanier.map((produit) => (
            <div className="card">
              <div className="img-area">
                <img src={doli} />
              </div>
              <div className="content">
                 <div className="name">{produit.nom} </div>
                {produit.nom_pharmacie } 
              </div>
              <div className="icon">
                <AddIcon />
                1
                <RemoveIcon />
              </div>
              <div className="trash">
                <DeleteForeverIcon />
              </div>
            </div>
          ))}
        
        </div>
      </div>
    </section>
  );
}

export default Panier;
