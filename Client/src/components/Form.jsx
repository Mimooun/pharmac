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
  const [dosages, setdosages] = useState([""]);
  const [dosage, setdosage] = useState([""]);
  const [formes, setformes] = useState([""]);
  const [quantite, setquantite] = useState([""]);

  const categorieRef = useRef();
  const produitRef = useRef();
  const forme = useRef();
  const doseRef = useRef();
  const quantiteRef = useRef();
  const [open, setOpen] = React.useState(false);

  const [verfName, setverfName] = useState(false);
  const [verfNamepharmacie, setverfNamepharmacie] = useState(false);
  const [verfAdressepharmacie, setverfAdressepharmacie] = useState(false);
  const [verfNamemedicament, setverfNamemedicament] = useState(false);
  const [verfQuantite, setverfQuantite] = useState(false);
  const [selectedid, setselectedid] = useState(false);
  const [id_utilisateur, setId_utilisateur] = useState();


  const getPickerValue = (value) => {
    setquantite(value) // Here you can get the value of the Quantity picker
  };
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      setId_utilisateur(response.data.id);
    });
  }, []);


  // const verifNamepharmacie = () => {
  //   const reg = new RegExp(/^[a-zA-Z]*$/);
  //   if (reg.test(pharmacieRef.current.value) === false) {
  //     setverfNamepharmacie(true);
  //   } else {
  //     setverfNamepharmacie(false);
  //   }
  // };

  // const verifAdressepharmacie = () => {
  //   const reg = new RegExp(/^[a-zA-Z]*$/);
  //   if (reg.test(adresseRef.current.value) === false) {
  //     setverfAdressepharmacie(true);
  //   } else {
  //     setverfAdressepharmacie(false);
  //   }
  // };

  // const verifQuantite = () => {
  //   const reg = new RegExp(/^[0-9]*$/);
  //   if (reg.test(quantiteRef.current.value) === false) {
  //     setverfQuantite(true);
  //   } else {
  //     setverfQuantite(false);
  //   }
  // };

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
    getSondage(event.target.value);
  };

  const handleChangecategorie = (event) => {
    setcategorie(event.target.value);
    Axios.post("http://localhost:3001/produitsbycategorie", {
      id: event.target.value,
    }).then((response) => {
      setproduits(response.data);
    });
  };

  function getSondage(id) {
    Axios.post("http://localhost:3001/detailsproduits", {
      id: id,
    }).then((response) => {
      setdosages(response.data);
    });
  }

  const handleChangedosage = (event) => {
    setdosage(event.target.value);
  };
  const handleChangeformes = (event) => {
    setformes(event.target.value);
  };

  function validate() {
    if (
      produit !== "" &&
      categorie !== "" &&
      formes !== "" &&
      dosage !== "" &&
      quantite !== ""
    ) {
      Axios.post("http://localhost:3001/addpanier", {
        produit: produit,
        categorie: categorie,
        forme: formes,
        dosage: dosage,
        quantite: quantite,
        id: id_utilisateur,
      }).then((response) => {
        if (response.data.message === "Operation completed") {
          console.log("Operation Completed");
          history.push({
            pathname: "/Panier",
            id: id_utilisateur,
          });
        } else {
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
          <div className="titre">Commandez ici !</div>
          <div className="box">
            <div className="textfield-container">
              <div className="inp">
                <FormControl style={{ width: "80%" }}>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    style={{ marginTop: "2px" }}
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
                    style={{ marginTop: "2px" }}
                  >
                    Produits
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={produit}
                    label="Produit"
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
                    style={{ marginTop: "2px" }}
                  >
                    Forme
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="categorie"
                    size="small"
                    error={verfNamemedicament}
                    onChange={handleChangeformes}
                  >
                    <MenuItem value={"Small"}>Small</MenuItem>
                    <MenuItem value={"Meduim"}>Meduim</MenuItem>
                    <MenuItem value={"Large"}>Large</MenuItem>
                  </Select>
                </FormControl>

                <FormControl style={{ width: "80%" }}>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    style={{ marginTop: "2px" }}
                  >
                    Dose
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={dosage}
                    label="Dose"
                    size="small"
                    onChange={handleChangedosage}
                  >
                    {dosages.map((dosag) => (
                      <MenuItem value={dosag.id_details_produits}>
                        {dosag.dose}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <QuantityPicker onChange={getPickerValue} value={1} style={{ width: "80%" }} />
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
