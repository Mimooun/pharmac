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
import { borderRadius } from "@mui/system";
import { useLocation } from "react-router-dom";
import { QuantityPicker } from "react-qty-picker";
import Alert from "@mui/material/Alert";
import Swal from "sweetalert2";
function Panier() {
  const [categories, setcategories] = useState([""]);
  const [categorie, setcategorie] = useState();
  const [produit, setproduit] = useState();
  const [produits, setproduits] = useState([""]);
  
  const location = useLocation();

  const [produitPanier, setProduitPanier] = useState([]);

  const [id_utilisateur, setId_utilisateur] = useState();
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
    });
    Axios.post("http://localhost:3001/produitspanier", {
      id: 1,
    }).then((response) => {
      setProduitPanier(response.data);
    });
  }, []);

  function deleteCommande(id) {
    Axios.post("http://localhost:3001/deletePanier", {
      id: id,
    }).then((response) => {});
  }
  function addCommande() {
    Axios.post("http://localhost:3001/addcommande", {
      id: id_utilisateur,
      date: date,
    }).then((response) => {
      alert("added successfully");
    });
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
        <div className="title">Vos produits</div>
        <div className="cards">
          {produitPanier.map((produit) => (
            <div className="card">
              <div className="img-area">
                <img src={doli} />
              </div>
              <div className="content">
                <div className="name">{produit.libelle_produit} </div>
                <div className="name">{produit.prix}</div>
                <div className="dispo">En stock !</div>
              </div>
              <QuantityPicker
                style={{ width: "40%" }}
                value={produit.quantite}
                min={1}
                smooth
              />

              <div className="trash">
                <div className="trash">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                      deleteCommande(produit.id_produit);

                      Swal.fire({
                        title: "êtes-vous sûr?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3ECFA3",
                        cancelButtonColor: "#3ECFA3",
                        confirmButtonText: "Oui, Suprimer !",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire(
                            "Deleted!",
                            "êtes-vous sûr devouloirsupprimer.",
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
          ))}
        </div>
      </div>
      <div className="button">
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3ECFA3",
          }}
          onClick={addCommande}
        >
          Valider
        </Button>

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
                  Confirm
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
