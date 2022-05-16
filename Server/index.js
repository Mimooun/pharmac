const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");

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
  const sqlSelect = "SELECT * FROM utilisateur WHERE `username` = ?";
  db.query(sqlSelect, [username], (err, result) => {
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
        if (bcrypt.compareSync(password, result[0].password)) {
          req.session.user = result;
          res.send(result);
        } else {
          res.send({
            message: "Authentication failed",
          });
        }
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
  const produit = req.body.produit;
  const categorie = req.body.categorie;
  const formes = req.body.forme;
  const dosage = req.body.dosage;
  const quantite = req.body.quantite;
  const id = req.body.id;
  const sqlSelect =
    "INSERT INTO `panier` (`id_panier`,`id_utilisateur`,`id_produit`,`forme`,`dosage`,`quantite`) VALUES (NULL,?,?,?,?,?)";
  db.query(
    sqlSelect,
    [id, produit, formes, dosage, quantite],
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
  const id = req.body.id;
  const date = req.body.date;
  const id_produit=req.body.id_produit;
  const totalPanier =req.body.totalPanier;

  const sqlSelect =
    "INSERT INTO `commande` (`id_commande`,`id_utilisateur`,`date_commande`) VALUES (NULL, ?, ?)";
  db.query(sqlSelect, [id, date], (err, result) => {
    if (err) {
      res.send({
        err: err,
      });
    }  else {
      const sqlselect2 = "INSERT INTO `details_commande`(`id_details_commande`, `id_utilisateur`, `id_commande`) VALUES (null,?,?)";
      db.query(sqlselect2, [id, result.insertId, id_produit], (err2, result2) => {
          if (err2) {
              res.send({
                  err2: err2
              })
          } else {
              res.send({
                  message: "Operation completed"
              })
          }
      })

  }
});
});

/** Add utilisateur script */

app.post("/addutilisateur", (req, res) => {
  /* console.log(req.body.lastnameRef ,req.body.firstnameRef,req.body.usernameRef,req.body.emailRef,req.body.telephoneRef,req.body.adresseRef,req.body.passwordRef)*/
  const lastnameRef = req.body.lastnameRef;
  const firstnameRef = req.body.firstnameRef;
  const usernameRef = req.body.usernameRef;
  const emailRef = req.body.emailRef;
  const telephoneRef = req.body.telephoneRef;
  const adresseRef = req.body.adresseRef;
  const passwordRef = req.body.passwordRef;
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(passwordRef, salt);
  const sqlSelect =
    "insert INTO `utilisateur` (`id_utilisateur`,`lastname`,`firstname`,`username`,`email`,`telephone`,`adresse`,`password`) VALUES (NULL,?,?,?,?,?,?,?)";
  db.query(
    sqlSelect,
    [
      lastnameRef,
      firstnameRef,
      usernameRef,
      emailRef,
      telephoneRef,
      adresseRef,
      hash,
    ],
    (err, result) => {
      if (err) {
        res.send({
          err: err,
        });
      } else {
        console.log(result);
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


/* selection de commande */

app.get("/commande", (req, res) => {
  const sqlSelect = "SELECT * FROM `commande`";
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
})

/*details produits affichage dosage*/

app.post("/detailsproduits", (req, res) => {
  const id = req.body.id;
  const sqlSelect = "SELECT * FROM `details_produits` WHERE id_produit = ?";
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

app.post("/deletePanier", (req, res) => {
  const id = req.body.id;
  const sqlSelect = "DELETE FROM `panier` WHERE `id_produit` = ?";
  db.query(sqlSelect, id, (err) => {
    if (err) {
      res.send({
        err: err,
      });
    } else {
      res.send({
        message: "Operation completed",
      });
    }
  });
});

/** update quantite fro panier */
app.post("/updatePanier", (req, res) => {
  const id_panier = req.body.id_panier;
  const quantite = req.body.quantite;
  const sqlSelect = "UPDATE `panier` set quantite= ? WHERE `id_panier` = ?";
  db.query(sqlSelect, [quantite, id_panier], (err) => {
    if (err) {
      res.send({
        err: err,
      });
    } else {
      res.send({
        message: "Operation completed",
      });
    }
  });
});

/* total panier script */

app.post("/totalPanier", (req, res) => {
  const idClient = req.body.idClient;
  const sqlSelect = "select sum(produits.prix * panier.quantite) as total from panier inner join produits on panier.id_produit = produits.id_produit where id_utilisateur = ?";
  db.query(sqlSelect, [idClient], (err, result) => {
      if (err) {
          res.send({
              err: err
          })
      } else {
          if (result.length == 0) {
              res.send({
                  message: "No Rows"
              })
          } else {
              res.send(result);
          }
      }
  });
})

/* fin total panier script */

/*delete produits dash*/ 
app.post("/deletepro", (req, res) => {
  const pro = req.body.pro;
  const sqlSelect = "DELETE FROM `produits` WHERE `id_produit` = ?";
  db.query(sqlSelect, student, (err, result) => {
      if (err) {
          res.send({
              err: err
          })
      } else {
          res.send({
              message: "Operation completed"
          })
      }
  })
})

/** fin  script */
app.listen(3001, () => {
  console.log("running");
});
