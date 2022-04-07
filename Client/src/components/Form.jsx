import React, { useState, useRef } from "react";
import Axios from "axios";
import Searchnav from "./Searchnav";
import Box from "@mui/material/Box";
import Formnav from '../components/Formnav'
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../styles/form.css";
import { Link} from "react-router-dom";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useHistory } from "react-router-dom";
export default function FormPropsTextFields() {
  let history = useHistory();
  const [situation, setSituaion] = useState();
  const nameRef = useRef();
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

  const verifName = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(nameRef.current.value) === false) {
        setverfName(true)
    } else {
        setverfName(false)
    }
}

const verifNamepharmacie = () => {
  const reg = new RegExp(/^[a-zA-Z]*$/);
  if (reg.test(pharmacieRef.current.value) === false) {
      setverfNamepharmacie(true)
  } else {
      setverfNamepharmacie(false)
  }
}

const verifAdressepharmacie = () => {
  const reg = new RegExp(/^[a-zA-Z]*$/);
  if (reg.test(adresseRef.current.value) === false) {
      setverfAdressepharmacie(true)
  } else {
      setverfAdressepharmacie(false)
  }
}

const verifNamemedicament = () => {
  const reg = new RegExp(/^[a-zA-Z]*$/);
  if (reg.test(medicamentRef.current.value) === false) {
      setverfNamemedicament(true)
  } else {
      setverfNamemedicament(false)
  }
}
const verifQuantite = () => {
  const reg = new RegExp(/^[0-9]*$/);
  if (reg.test(quantiteRef.current.value) === false) {
      setverfQuantite(true)
  } else {
    setverfQuantite(false)
  }
}

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function validate() {
    
    if (
      nameRef.current.value !== " " && !verfName && 
      pharmacieRef.current.value !== " " && !verfNamepharmacie &&
      adresseRef.current.value !== " " && !verfAdressepharmacie &&
      medicamentRef.current.value !== " " &&
      dateRef.current.value !== " " &&
      quantiteRef.current.value !==  " "&& !verfQuantite
    );{
      Axios.post("http://localhost:3001/addpanier", {
        nameRef: nameRef.current.value,
        pharmacieRef: pharmacieRef.current.value,
        adresseRef: adresseRef.current.value ,
        medicamentRef: medicamentRef.current.value ,
        dateRef: dateRef.current.value,
        quantiteRef: quantiteRef.current.value,
      }).then((response) => {
        if (response.data.message === "Operation completed") {
          /** redirect to students list */
          console.log("Operation Completed");
          history.push({
            pathname: "/Panier",
             })
        }
        else {
          if (nameRef.current.value === '') {
              setverfName (true)
          }
          if (pharmacieRef.current.value === '') {
              setverfNamepharmacie(true)
          }
          if (adresseRef.current.value === '') {
              setverfAdressepharmacie(true)
          }
          if (medicamentRef.current.value === '') {
              setverfNamemedicament(true)
          } 
          if (quantiteRef.current.value === '') {
            setverfQuantite(true)
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
              <div className="one">
                <TextField
                  style={{
                    borderBlockStyle: "red",
                  }}
                  inputRef={nameRef}
                  
                  className="textfield"
                  required
                  id="outlined-required"
                  label="Nom Complet"
                  onChange={verifName}
                  error={verfName}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nom pharmacie"
                  inputRef={pharmacieRef}
                  onChange={verifNamepharmacie}
                  error={verfNamepharmacie}
                />
              </div>
              <div className="two">
                <TextField
                  required
                  id="outlined-required"
                  label="Adresse pharmacie"
                  inputRef={adresseRef}
                  onChange={verifAdressepharmacie}
                  error={verfAdressepharmacie}
                />
                <TextField
                  className="textfield"
                  required
                  id="outlined-required"
                  label="Nom Médicaments"
                  inputRef={medicamentRef} 
                  onChange={verifNamemedicament}
                  error={verfNamemedicament}
                />
              </div>

              <div className="three">
                <TextField
                  className="textfield"
                  id="date"
                  label="Date Commande"
                  type="date"
                  inputRef={dateRef}
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

                <FormControl className="textfield">
                  <FormLabel id="demo-row-radio-buttons-group-label">
                    Situation
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="urgent"
                      control={<Radio />}
                      label="Urgent"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Pas Urgent"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="number">
                <TextField
                  style={{
                    backgroundColor: "white",
                    
                  }}
                  inputRef={quantiteRef}
                  onChange={verifQuantite}
                  error={verfQuantite}
                  id="filled-number"
                  label="Quantite"
                  type="Quantite"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                />
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
                    color:"white",
                    border:"1px solid #3ecfa3 "
                  }}
                    disableElevation
                    variant="outlined"
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
                      <DialogContentText id="alert-dialog-description"  >
                        Are you sure you want to continue ?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}  style={{ color:"#3ecfa3", }}>
                        Cancel
                      </Button>
                      <Link to="/">
                        <Button onClick={handleClose} autoFocus  style={{color:"#3ecfa3", }}>
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
