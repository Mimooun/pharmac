import React, { useEffect, useState, useRef } from "react";
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
import { border, borderRadius } from "@mui/system";
import { useLocation } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
function Panier() {
  const [categories, setcategories] = useState([""]);
  const [categorie, setcategorie] = useState();
  const [produit, setproduit] = useState();
  const [produits, setproduits] = useState([""]);

  const location = useLocation();

  const [produitPanier, setProduitPanier] = useState([]);
  const [TotalPanier, setTotalPanier] = useState([""]);

  const [id_utilisateur, setId_utilisateur] = useState();
  const [id_commande, setId_commande] = useState();
  const [id_client, setid_client] = useState();
  const [id_produit, setId_produit] = useState();
  const [open, setOpen] = React.useState(false);
  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  console.log(date);

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setId_utilisateur(response.data.id);

      Axios.post("http://localhost:3001/produitspanier", {
        id: id_utilisateur,
      }).then((response) => {
        setProduitPanier(response.data);
      });
      Axios.post("http://localhost:3001/totalPanier", {
        idClient: id_utilisateur,
      }).then((response) => {
        setTotalPanier(response.data);
      });
    });
  }, [id_utilisateur]);

  function deleteCommande(id) {
    Axios.post("http://localhost:3001/deletePanier", {
      id: id,
    }).then((response) => {});
  }
  function addCommande() {
    Axios.post("http://localhost:3001/addcommande", {
      id: id_utilisateur,
      date: date,
      id_produit: id_produit,
      TotalPanier: TotalPanier,
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
  function updatequantite(id_panier, quantite) {
    Axios.post("http://localhost:3001/updatePanier", {
      id_panier: id_panier,
      quantite: quantite,
    }).then((response) => {
      Axios.post("http://localhost:3001/produitspanier", {
        id: id_utilisateur,
      }).then((response) => {
        setProduitPanier(response.data);
      });
    });
  }
  return (
    <section className="sec">
      <div className="title">Vos produits</div>
      <div className="cart">
        <div className="cards">
          {produitPanier.length > 0
            ? produitPanier.map((produit) => (
                <div className="card">
                  <div className="img-area">
                    <img src={doli} />
                  </div>
                  <div className="content">
                    <div className="name">{produit.libelle_produit} </div>
                    <div className="name2">
                      {produit.prix * produit.quantite}DH
                    </div>
                    <div className="dispo">En stock !</div>
                  </div>
                  <QuantityPicker
                    style={{ width: "40%" }}
                    value={produit.quantite}
                    min={1}
                    smooth
                    onChange={(value) => {
                      updatequantite(produit.id_panier, value);
                    }}
                  />

                  <div className="trash">
                    <div className="trash">
                      <Button
                        startIcon={<DeleteIcon />}
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          deleteCommande(produit.id_produit);

                          Swal.fire({
                            title: "??tes-vous s??r?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3ECFA3",
                            cancelButtonColor: "#3ECFA3",
                            confirmButtonText: "Oui, Suprimer !",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire(
                                "Supprim??!",
                                "Votre produit a ??t?? supprim??.",
                                "success"
                              );
                            }
                          });
                        }}
                      >
                        Supprimer
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            : <div className="paniervide">Panier vide</div>  }
        </div>
        {produitPanier.length > 0 ? (
          <div className="total">
            <span className="total">Total : </span> {TotalPanier[0].total}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="button">
        <Button
          variant="outlined"
          style={{
            background: "#3ECFA3",
            color: "white",
            border: "1px solid #3ECFA3",
          }}
          onClick={() => {
            addCommande();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "votre commande a bien ??t?? enregistr??e",
              showConfirmButton: false,
              timer: 1500,
            });
          }}
        >
          Valider
        </Button>
        <Link to="/Form">
          <Button
            style={{
              backgroundColor: "#3ecfa3",
              marginTop: "100px",
              display: "block",
              margin: "auto",
              color: "white",
              border: "1px solid #3ecfa3 ",
            }}
            disableElevation
            variant="contained"
            onClick={handleClickOpen}
          >
            Ajouter un autre produit
          </Button>
        </Link>

        <Stack direction="row" spacing={3}>
          <Button
            style={{
              backgroundColor: "#3ecfa3",
              marginTop: "100px",
              display: "block",
              margin: "auto",
              color: "white",
              border: "1px solid #3ecfa3 ",
            }}
            disableElevation
            variant="contained"
            onClick={handleClickOpen}
          >
            Cancel
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Please confirm !"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to continue ?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: "#3ecfa3" }}>
                Cancel
              </Button>
              <Link to="/">
                <Button
                  onClick={handleClose}
                  autoFocus
                  style={{ color: "#3ecfa3" }}
                >
                  Confirmer
                </Button>
              </Link>
            </DialogActions>
          </Dialog>
        </Stack>
      </div>
    </section>
  );
}

export default Panier;
