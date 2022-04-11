import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../styles/panier.css";
import doli from "../assets/images/shopping-bag.png";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { borderRadius } from "@mui/system";
import { useLocation } from "react-router-dom";
function Panier() {
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const [produitPanier, setProduitPanier] = useState([]);

  const [id_utilisateur, setId_utilisateur] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setId_utilisateur(response.data.id);
    });
    Axios.post("http://localhost:3001/produitspanier", {
      id: location.id,
    }).then((response) => {
      setProduitPanier(response.data);
    });
  }, []);

  function deletePanier(id) {
    console.log("test");
    Axios.post("http://localhost:3001/deletePanier", {
      id: id,
    }).then((response) => {});
  }

  /*open and clos */
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /* fin script*/

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
                {produit.nom_pharmacie}
                {produit.libelle_categorie}
                {produit.libelle_produit}
              </div>
              <div className="icon">
                <div className="counter">
                  <div className="primary-btn">
                    <button
                      onClick={() => {
                        quantity > 1
                          ? setQuantity(quantity - 1)
                          : setQuantity(quantity);
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="count"> {quantity} </div>
                  <div className="primary-btn">
                    <button
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="trash">
                <Stack direction="row" spacing={3}></Stack>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3ECFA3",
          }}
        >
          Valider
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3ECFA3",
          }}
        >
          Cancel
        </Button>
      </div>
    </section>
  );
}

export default Panier;
