import * as React from "react";
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
import { color } from "@mui/system";

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="max-width">
        <div className="title">Commande</div>
        <div className="textfield-container">
          <div className="one">
            <TextField
              className="textfield"
              required
              id="outlined-required"
              label="Nom Complet"
              defaultValue="Nom Complet"
            />

            <TextField
              required
              id="outlined-required"
              label="Pharmacie"
              defaultValue="Nom pharmacie"
            />
          </div>
          <div className="two">
            <TextField
              required
              id="outlined-required"
              label="Adresse pharmacie"
              defaultValue="Adresse pharmacie"
            />
            <TextField
              className="textfield"
              required
              id="outlined-required"
              label="Nom Médicaments"
              defaultValue="Nom Médicaments"
            />
          </div>
          <div className="three">
            <TextField
              className="textfield"
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />

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
          </div>
          <div className="foor">
            <TextField
              className="textfield"
              id="date"
              label="Date Livraison"
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
                  className="textfield"
                  value="female"
                  control={<Radio />}
                  label="Urgent"
                />
                <FormControlLabel
                  className="textfield"
                  value="male"
                  control={<Radio />}
                  label="Pas Urgent"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <Stack direction="row" spacing={3}>
            <Button variant="contained" className="textfield">
              Commander
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
