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

function Form() {
  return (
    <Box
    component="form"
    sx={{
      "& .MuiTextField-root": { m: 1, width: "40ch" },
    }}
    noValidate
    autoComplete="off"
  >
    <section>
      <div className="max-width">
      <div className="title"> Commande ici !</div>
      <div className="form-area">
        <div className="left">
          
          <TextField
            className="textfield"
            required
            id="outlined-required"
            label="Nom Complet"
          />
          <TextField
            required
            id="outlined-required"
            label="Adresse pharmacie"
          />
          <TextField
            className="textfield"
            id="outlined-number"
            label="Quantité"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        
        </div>
        <div className="right">
          <TextField
            className="textfield"
            required
            id="outlined-required"
            label="Nom Médicaments"
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
          <TextField
            required
            id="outlined-required"
            label="Pharmacie"
          />
         <div className="situation">
           
         </div>
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

      </div>

      <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3ecfa3",
              marginTop: "80px",
              display: "block",
              margin: "auto",
              fontSize:"17px"
            }}
          >
            commander !{""}
          </Button>
        </Stack>
      </div>
     
    </section>
    </Box>
  );
}

export default Form;
