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
function Panier() {
  const [produitPanier, setProduitPanier] = useState([]);

  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/produitspanier").then((response) => {
      setProduitPanier(response.data);
    });
  }, []);

  /*function deletePanier(id) {
    console.log('test');
    Axios.post("http://localhost:3001/deletePanier", { id: id }).then(
      (response) => {
        handleClose();
        console.log(response);

      }
    );
  }*/

  /*open and clos */
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("test");
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
                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    onClick={handleClickOpen}
                    style={{
                      backgroundColor: "transeparent",
                      marginTop: "100px",
                      display: "block",
                      margin: "auto",
                      color: "white",
                      border: "0px solid #3ecfa3 ",
                    }}
                    disableElevation
                    //variant="outlined"
                    onClick={handleClickOpen}
                    
                  >
                    <DeleteForeverIcon
                      style={{
                        backgroundColor: "#3ecfa3",
                        marginTop: "100px",
                        display: "block",
                        margin: "auto",
                        color: "white",
                        border: "1px solid #3ecfa3 ",
                        borderRadius: "5px",
                      }}
                    ></DeleteForeverIcon>
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
                      <Button
                        onClick={handleClose()}
                        style={{ color: "#3ecfa3" }}
                      >
                        Cancel
                      </Button>
                        <Button
                          //onClick={deletePanier(produit.id_panier)}
                          autoFocus
                          style={{ color: "#3ecfa3" }}
                        >
                          Confirm
                        </Button>
                    </DialogActions>
                  </Dialog>
                </Stack>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Panier;
