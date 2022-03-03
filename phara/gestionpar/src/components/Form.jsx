import * as React from "react";
import Formnav from "./Formnav";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "../styles/form.css";

export default function FormPropsTextFields() {
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
                  className="textfield"
                  required
                  id="outlined-required"
                  label="Nom Complet"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Nom pharmacie"
                />
              </div>
              <div className="two">
                <TextField
                  required
                  id="outlined-required"
                  label="Adresse pharmacie"
                />
                <TextField
                  className="textfield"
                  required
                  id="outlined-required"
                  label="Nom Médicaments"
                />
              </div>

              <div className="three">
                <TextField
                  className="textfield"
                  id="date"
                  label="Date Commande"
                  type="date"
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
                      value="female"
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
              <div className="btn-form">
                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
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
                    variant="contained"
                    style={{
                      backgroundColor: "#3ecfa3",
                      marginTop: "100px",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    Quantité
                  </Button>
                </Stack>
                <Stack direction="row" spacing={3}>
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#3ecfa3",
                      marginTop: "100px",
                      display: "block",
                      margin: "auto",
                    }}
                  >
                    Annuler
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
