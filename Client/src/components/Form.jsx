import React, { useState, useRef, useEffect } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Formnav from "../components/Formnav";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../styles/form.css";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { QuantityPicker } from "react-qty-picker";

export default function FormPropsTextFields() {
  let history = useHistory();
  const [situation, setSituaion] = useState();
  const [categories, setcategories] = useState([""]);
  const [categorie, setcategorie] = useState();
  const [produit, setproduit] = useState();
  const [produits, setproduits] = useState([""]);

  const pharmacieRef = useRef();
  const adresseRef = useRef();

  const medicamentRef = useRef();
  const dateRef = useRef();
  const quantiteRef = useRef();
  const [open, setOpen] = React.useState(false);

  const [verfName, setverfName] = useState(false);
  const [verfNamepharmacie, setverfNamepharmacie] = useState(false);
  const [verfAdressepharmacie, setverfAdressepharmacie] = useState(false);
  const [verfNamemedicament, setverfNamemedicament] = useState(false);
  const [verfQuantite, setverfQuantite] = useState(false);
  const [selectedid, setselectedid] = useState(false);

  const [id_utilisateur, setId_utilisateur] = useState();
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setId_utilisateur(response.data.id);
    });
  }, []);

  const verifNamepharmacie = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(pharmacieRef.current.value) === false) {
      setverfNamepharmacie(true);
    } else {
      setverfNamepharmacie(false);
    }
  };

  // const verifAdressepharmacie = () => {
  //   const reg = new RegExp(/^[a-zA-Z]*$/);
  //   if (reg.test(adresseRef.current.value) === false) {
  //     setverfAdressepharmacie(true);
  //   } else {
  //     setverfAdressepharmacie(false);
  //   }
  // };

  const verifQuantite = () => {
    const reg = new RegExp(/^[0-9]*$/);
    if (reg.test(quantiteRef.current.value) === false) {
      setverfQuantite(true);
    } else {
      setverfQuantite(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/categories").then((response) => {
      setcategories(response.data);
    });
    Axios.get("http://localhost:3001/produits").then((response) => {
      setproduits(response.data);
    });
  }, []);

  const handleChange = (event) => {
    setproduit(event.target.value);
  };

  const handleChangecategorie = (event) => {
    setcategorie(event.target.value);
    Axios.post("http://localhost:3001/produitsbycategorie", {
      id: event.target.value,
    }).then((response) => {
      setproduits(response.data);
    });
  };

  function validate() {
    if (
      pharmacieRef.current.value !== " " &&
      !verfNamepharmacie &&
      adresseRef.current.value !== " " &&
      !verfAdressepharmacie &&
      produit !== "" &&
      dateRef.current.value !== " " &&
      quantiteRef.current.value !== " " &&
      !verfQuantite
    ) {
      Axios.post("http://localhost:3001/addpanier", {
        pharmacieRef: pharmacieRef.current.value,
        adresseRef: adresseRef.current.value,
        produit: produit,
        dateRef: dateRef.current.value,
        quantiteRef: quantiteRef.current.value,
        id: id_utilisateur,
      }).then((response) => {
        if (response.data.message === "Operation completed") {
          /** redirect to students list */
          console.log("Operation Completed");
          history.push({
            pathname: "/Panier",
            id: id_utilisateur,
          });
        } else {
          if (pharmacieRef.current.value === "") {
            setverfNamepharmacie(true);
          }
          // if (adresseRef.current.value === "") {
          //   setverfAdressepharmacie(true);
          // }
          if (medicamentRef.current.value === "") {
            setverfNamemedicament(true);
          }
          if (quantiteRef.current.value === "") {
            setverfQuantite(true);
          }
        }
      });
    }
  }
  return (
    <div>
      <Formnav />
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="max-width">
          <div className="titre">Commande</div>
          <div className="box">
            <div className="textfield-container">
              <div className="inp">
                <FormControl style={{ width: "80%" }}>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    style={{ marginTop: "4px" }}
                  >
                    Categorie
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categorie}
                    label="categorie"
                    size="small"
                    error={verfNamemedicament}
                    onChange={handleChangecategorie}
                  >
                    {categories.map((categorie) => (
                      <MenuItem value={categorie.id_categorie}>
                        {categorie.libelle_categorie}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl style={{ width: "80%" }}>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    style={{ marginTop: "4px" }}
                  >
                    Produits
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={produit}
                    label="produit"
                    size="small"
                    onChange={handleChange}
                  >
                    {produits.map((produit) => (
                      <MenuItem value={produit.id_produit}>
                        {produit.libelle_produit}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl style={{ width: "80%" }}>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    style={{ marginTop: "4px" }}
                  >
                    Forme
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categorie}
                    label="categorie"
                    size="small"
                    error={verfNamemedicament}
                    onChange={handleChangecategorie}
                  >
                    {categories.map((categorie) => (
                      <MenuItem value={categorie.id_categorie}>
                        {categorie.libelle_categorie}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl style={{ width: "80%" }}>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    style={{ marginTop: "4px" }}
                  >
                    Modèle
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={produit}
                    label="produit"
                    size="small"
                    onChange={handleChange}
                  >
                    {produits.map((produit) => (
                      <MenuItem value={produit.id_produit}>
                        {produit.libelle_produit}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <FormControl fullWidth style={{ width: "80%"}}>
                  <InputLabel size="small" id="demo-simple-select-label">
                    Dosage
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Dosage"
                    size="small"
                  >
                    <MenuItem value={"Male"}></MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>

                <QuantityPicker style={{ width: "80%"}} />
              </div>

              <div className="btn-form">
                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      validate();
                    }}
                    style={{
                      backgroundColor: "#3ecfa3",
                      marginTop: "100px",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    Ajouter au panier
                  </Button>
                </Stack>

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
                      <Button
                        onClick={handleClose}
                        style={{ color: "#3ecfa3" }}
                      >
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
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
