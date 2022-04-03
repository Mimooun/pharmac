const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "stock",
});
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

/** login script */

app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelect =
    "SELECT * FROM admin WHERE `username` = ? and `password` = ?";
  db.query(sqlSelect, [username, password], (err, result) => {
    if (err) {
      res.send({
        err: err,
      });
    } else {
      if (result.length == 0) {
        const sqlSelect1=
          "SELECT * FROM utilisateur  WHERE `username` = ? and `password` = ?";
        db.query(sqlSelect1, [username, password], (err, result) => {
          if (err) {
            res.send({
              err: err,
            });
          } else {
            if (result.length == 0) {
              res.send({
                message: "Authentication failed",
              });
            } else {
              req.user = result;
              res.send(result);
            }
          }
        });

      } else {
        req.user = result;
        res.send(result);
      }
    }
  });
});
/** Add commande script */

app.post("/addpanier", (req, res) => {
  const nameRef = req.body.nameRef;
  const pharmacieRef = req.body.pharmacieRef;
  const adresseRef = req.body.adresseRef;
  const medicamentRef = req.body.medicamentRef;
  const dateRef = req.body.dateRef;
  const quantiteRef = req.body.quantiteRef;
  const situation = "";

  const sqlSelect =
    "INSERT INTO `panier` (`id_panier`, `nom`, `nom_pharmacie`, `adresse_pharmacie`, `nom_medicament`, `date_commande`, `situation`, `quantite`) VALUES (NULL,?,?,?,?,?,?,?)";
  db.query(
    sqlSelect,
    [
      nameRef,
      pharmacieRef,
      adresseRef,
      medicamentRef,
      dateRef,
      situation,
      quantiteRef,
    ],
    (err, result) => {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send({
          message: "Operation completed",
        });
      }
    }
  );
});

/** Add utilisateur script */

app.post("/addutilisateur", (req, res) => {
  const lastnameRef = req.body.lastnameRef;
  const firstnameRef = req.body.firstnameRef;
  const passwordRef = req.body.passwordRef;
  const usernameRef = req.body.usernameRef;
  const sqlSelect =
    "INSERT INTO `utilisateur` (`id_utilisateur`,`firstname`,`lastname`,`username`,`password`) VALUES (NULL,?,?,?,?)";
  db.query(
    sqlSelect,
    [lastnameRef, firstnameRef, usernameRef, passwordRef],
    (err, result) => {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        res.send({
          message: "Operation completed",
        });
      }
    }
  );
});

app.get("/produitspanier", (req, res) => {
  const sqlSelect = "SELECT * FROM `panier` ORDER BY `id_panier` ASC";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      res.send({
        err: err,
      });
    } else {
      if (result.length == 0) {
        res.send({
          message: "No Rows",
        });
      } else {
        res.send(result);
      }
    }
  });
});
/**fin script teachers */

/** fin Add Student script */
app.listen(3001, () => {
  console.log("running");
});
