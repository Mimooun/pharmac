const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");

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

app.use(cookieParser());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("./public"));
app.use(express.json());

app.use(
  session({
    key: "userId",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24,
    },
  })
);

/** login script */

app.post("/Login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const sqlSelect =
    "SELECT * FROM utilisateur  WHERE `username` = ? and `password` = ?";
  db.query(sqlSelect, [username, password], (err, result) => {
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
        req.session.user = result;
        res.send(result);
      }
    }
  });
});

/** check if session exist */

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({
      id: req.session.user[0].id_utilisateur,
      lastname: req.session.user[0].lastname,
    });
  }
});
/** Add commande script */

app.post("/addpanier", (req, res) => {
  const pharmacieRef = req.body.pharmacieRef;
  const adresseRef = req.body.adresseRef;
  const produit = req.body.produit;
  const dateRef = req.body.dateRef;
  const quantiteRef = req.body.quantiteRef;
  const id = req.body.id;
  const sqlSelect =
    "INSERT INTO `panier` (`id_panier`,`nom_pharmacie`, `adresse_pharmacie`,`id_produit`, `date_commande`, `quantite`, `id_utilisateur`) VALUES (NULL,?,?,?,?,?,?)";
  db.query(
    sqlSelect,
    [pharmacieRef, adresseRef, produit, dateRef, quantiteRef, id],
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


/** Add commande script */

app.post("/addcommande", (req, res) => {
  const id_commande = req.body.id_commandeRef;
  const id = req.body.id;
  const quantite = req.body.quantite;
  const date = req.body.date;
  
  const sqlSelect =
    "INSERT INTO `commande` (`id_commande`,`id_utilisateur`, `date_commande`,`quantite`, `prix`) VALUES (NULL,?,?,?,?)";
  db.query(
    sqlSelect,
    [id_commande,id, quantite, date,]
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

app.post("/produitspanier", (req, res) => {
  const id = req.body.id;
  const sqlSelect =
    "SELECT * FROM `panier` inner join produits on panier.id_produit = produits.id_produit inner join categorie on produits.id_categorie = categorie.id_categorie where id_utilisateur = ?";
  db.query(sqlSelect, [id], (err, result) => {
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
/**fin script  */

app.get("/categories", (req, res) => {
  const sqlSelect = "SELECT * FROM `categorie` ORDER BY `id_categorie` ASC";
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
/* selection de produits */

app.get("/produits", (req, res) => {
  const sqlSelect = "SELECT * FROM `produits`";
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

app.post("/produitsbycategorie", (req, res) => {
  const id = req.body.id;
  const sqlSelect = "SELECT * FROM `produits` where `id_categorie`=?";
  db.query(sqlSelect, [id], (err, result) => {
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

// app.post("/deletePanier", (req, res) => {
//  const id = req.body.id;
//   const sqlSelect = "DELETE FROM `panier` WHERE `id_panier` = ?";
//   db.query(sqlSelect, id, (err) => {
//     if (err) {
//       res.send({
//         err: err,
//       });
//     } else {
//       res.send({
//         message: "Operation completed",
//       });
//     }
//   });
// });

/** fin  script */
app.listen(3001, () => {
  console.log("running");
});
