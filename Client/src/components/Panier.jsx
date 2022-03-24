import React, { forwardRef, useEffect, useState } from "react";
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
      console.log(response.data);
    });
  }, []);
  return (
    <section className="sec">
      <div className="cart">
        <div className="title">Your products</div>
        <div className="cards">
          {produitPanier.map((items) => (
            <div className="card">
              <div className="img-area">
                <img src={doli} />
              </div>
              <div className="content">
                {items.nom}
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

          {/* <div className="card">
            <div className="img-area">
              <img src={doli} />
            </div>
            <div className="content">
              doliprane 1000mg pour douleurs et fièvres
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

          <div className="card">
            <div className="img-area">
              <img src={doli} />
            </div>
            <div className="content">
              doliprane 1000mg pour douleurs et fièvres
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

          <div className="card">
            <div className="img-area">
              <img src={doli} />
            </div>
            <div className="content">
              doliprane 1000mg pour douleurs et fièvres
            </div>
            <div className="icon">
              <AddIcon />
              1
              <RemoveIcon />
            </div>
            <div className="trash">
              <DeleteForeverIcon />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Panier;
