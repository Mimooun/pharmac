import React, { useState, useRef } from "react";
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
export default function FormPropsTextFields() {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
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
      setverfName(true);
    } else {
      setverfName(false);
    }
  };

  const verifNamepharmacie = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(pharmacieRef.current.value) === false) {
      setverfNamepharmacie(true);
    } else {
      setverfNamepharmacie(false);
    }
  };

  const verifAdressepharmacie = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(adresseRef.current.value) === false) {
      setverfAdressepharmacie(true);
    } else {
      setverfAdressepharmacie(false);
    }
  };

  const verifNamemedicament = () => {
    const reg = new RegExp(/^[a-zA-Z]*$/);
    if (reg.test(medicamentRef.current.value) === false) {
      setverfNamemedicament(true);
    } else {
      setverfNamemedicament(false);
    }
  };
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

  function validate() {
    if (
      nameRef.current.value !== " " &&
      !verfName &&
      pharmacieRef.current.value !== " " &&
      !verfNamepharmacie &&
      adresseRef.current.value !== " " &&
      !verfAdressepharmacie &&
      medicamentRef.current.value !== " " &&
      dateRef.current.value !== " " &&
      quantiteRef.current.value !== " " &&
      !verfQuantite
    );
    {
      Axios.post("http://localhost:3001/addpanier", {
        nameRef: nameRef.current.value,
        pharmacieRef: pharmacieRef.current.value,
        adresseRef: adresseRef.current.value,
        medicamentRef: medicamentRef.current.value,
        dateRef: dateRef.current.value,
        quantiteRef: quantiteRef.current.value,
      }).then((response) => {
        if (response.data.message === "Operation completed") {
          /** redirect to students list */
          console.log("Operation Completed");
          history.push({
            pathname: "/Panier",
          });
        } else {
          if (nameRef.current.value === "") {
            setverfName(true);
          }
          if (pharmacieRef.current.value === "") {
            setverfNamepharmacie(true);
          }
          if (adresseRef.current.value === "") {
            setverfAdressepharmacie(true);
          }
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
                <Stack spacing={2} sx={{ width: 300 }}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={top100Films.map((option) => option.title)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  />
                </Stack>
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

                <TextField
                  style={{
                    backgroundColor: "white",
                    marginLeft: "auto",
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
              <div className="number"></div>
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
