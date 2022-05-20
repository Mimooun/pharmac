import React, { forwardRef, useEffect, useState } from "react";
import Axios from "axios";
import "../../styles/Dash/prod.css";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import Refresh from "@material-ui/icons/Refresh";
import Save from "@material-ui/icons/Save";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import logo from "../Dash/assets/SOSpharma2.png";

import "../../styles/Dash/down.css";
function Down() {
  const [id_utilisateur, setId_utilisateur] = useState([]);
  const [produit, setproduit] = useState([]);
  const [produitPanier, setProduitPanier] = useState([]);
  const [TotalPanier, setTotalPanier] = useState([""]);

  useEffect(() => {
    Axios.get("http://localhost:3001/utilisateur").then((response) => {
      console.log(response.data.id);
      setId_utilisateur(response.data);
    });
    Axios.post("http://localhost:3001/produitspanier", {
      id: 1,
    }).then((response) => {
      setProduitPanier(response.data);
    });
    Axios.post("http://localhost:3001/totalPanier", {
      idClient: 1,
    }).then((response) => {
      setTotalPanier(response.data);
    });
  }, []);

  return (
    <section className="down">
      <div className="container">
        <div className="img">
          <img src={logo} alt="" />
        </div>
        <div className="title_factue">Facture</div>
        <div className="donnes">
          <div className="sos">
            <div className="adresse">
              {" "}
              <span>Adresse</span> : 11/17 Rue Ofkir Oujda Maroc
            </div>{" "}
            <br />
            <div className="tel">
              {" "}
              <span>Telephone</span> : 05 36 71 05 68
            </div>{" "}
            <br />
            <div className="email">
              {" "}
              <span>Email</span> : xxxxxx@gmail.com
            </div>{" "}
            <br />
            <div className="site">
              {" "}
              <span>Site</span> : sospharma.ma
            </div>{" "}
            <br />
          </div>
          <div className="perso">
            {id_utilisateur.map((utilisateur) => (
              <div className="card">
                <div className="content">
                  <div className="name">
                    <span>Nom :</span> {utilisateur.firstname}{" "}
                  </div>
                  <div className="email">
                    {" "}
                    <span>Email :</span> {utilisateur.email}
                  </div>
                  <div className="tel">
                    {" "}
                    <span>Tel :</span> {utilisateur.telephone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="table">
          <table
            style={{
              borderWidth: "1px",
              borderColor: "#30B99E",
              borderStyle: "solid",
            }}
          >
            <tr className="tr">
              <td>Produits</td>
              <td>Qte</td>
              <td>Prix</td>
              <td>Remise</td>
              <td>Total Ht</td>
            </tr>
            {produitPanier.map((pro) => (
              <tr>
                <td>{pro.libelle_produit}</td>
                <td>{pro.quantite}</td>
                <td>{pro.prix}</td>
                <td>0.00</td>
                <td>{pro.prix * pro.quantite}DH</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="total">
          Total :<span className="totalpanier"> {TotalPanier[0].total}</span>
        </div>

        <div className="ligne"></div>
        <div className="footersos">
          <div className="donnesos">
            <div className="title">SOSPHARMA</div>
            <div className="seriefooter"> № SIRET : 7328293290007</div>
            <div className="reffooter"> -APE/SOS:8121Z</div>
            <div className="adressefooter">
              11/17 Rue Ofkir Oujda Maroc 6000 TEl 06.15.88.07.58
            </div>
            <div className="emailfooter">
              Email : ContactSOS@gmail.com - SiteWeb : www.sos.ma
            </div>
            <br />
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Down;
