import React from "react";
import "../styles/panier.css";
import doli from "../assets/images/shopping-bag.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function Panier() {
  return (
    <section className="sec">
      <div className="cart">
        <div className="title">Your products</div>
        <div className="cards">
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
          </div>

        </div>
      </div>
    </section>
  );
}

export default Panier;
