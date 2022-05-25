import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { QuantityPicker } from "react-qty-picker";
import "../../styles/Dash/add.css";

export default function BasicTextFields() {
  function addproddash() {
  
    if (
      categorie !== "" &&
      NomproduitRef.current.value !== "" && 
      CodeproduitRef.current.value !== "" &&  
      QuantiteproduitRef.current.value !== "" && 
      PrixproduitRef.current.value !== "" 
    ) 
    {
      Axios.post("http://localhost:3001/addproduitdash", {
        categorie: categorie,
        NomproduitRef: NomproduitRef.current.value,
        CodeproduitRef: CodeproduitRef.current.value,
        QuantiteproduitRef: QuantiteproduitRef.current.value,
        PrixproduitRef: PrixproduitRef.current.value,
      }).then((response) => {
        if (response.data.message === "Operation completed") {
          /** redirect to  list */
          console.log("Operation Completed");
          NomproduitRef.current.value =""
          CodeproduitRef.current.value =""
          QuantiteproduitRef.current.value=""
          PrixproduitRef.current.value=""
          
          history.push({
            //pathname: "/login",
          });
        } else {
          
        }
      });
    }
  }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
  const [categories, setcategories] = useState([""]);
  const [categorie, setcategorie] = useState();
  const [produit, setproduit] = useState();
  const [produits, setproduits] = useState([""]);
  const handleChangecategorie = (event) => {
    setcategorie(event.target.value);
    Axios.post("http://localhost:3001/produitsbycategorie", {
      id: event.target.value,
    }).then((response) => {
      setproduits(response.data);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/categories").then((response) => {
      setcategories(response.data);
    });
  }, []);

  let history = useHistory();
  const CategorieRef = useRef();
  const NomproduitRef = useRef();
  const CodeproduitRef = useRef();
  const QuantiteproduitRef = useRef();
  const PrixproduitRef = useRef();
  return (
    <section className="add" style={{ marginTop: "150px" }}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="textfield">
          <div className="title">Ajouter un Produit</div>

          <FormControl style={{ width: "100%" }}>
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
              onChange={handleChangecategorie}
            >
              {categories.map((categorie) => (
                <MenuItem value={categorie.libelle_categorie}>
                  {categorie.libelle_categorie}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Nom Produit"
            variant="outlined"
            style={{ marginTop: "25px" }}
            inputRef={NomproduitRef}
            size="small"
          />
          <TextField
            label="Code Produit"
            variant="outlined"
            style={{ marginTop: "15px" }}
            inputRef={CodeproduitRef}
            size="small"
          />
          <TextField
            id="outlined-number"
            label="Quantite"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            
            style={{ marginTop: "15px" }}
            inputRef={QuantiteproduitRef}
            size="small"
          />
          <TextField
            label="Prix Produit"
            variant="outlined"
            style={{ marginTop: "15px" }}
            inputRef={PrixproduitRef}
            size="small"
          />
        </div>
        <div className="btn-form">
          <Stack direction="row" spacing={3}>
            <Button
              variant="contained"
              onClick={() => {
                addproddash();
              }}
              style={{
                backgroundColor: "#3ecfa3",
                marginTop: "100px",
                display: "block",
                margin: "auto",
              }}
            >
              Ajouter
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
                <Button onClick={handleClose} style={{ color: "#3ecfa3" }}>
                  Cancel
                </Button>
                <Link to="/Dash/Prod">
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
      </Box>
    </section>
  );
}
