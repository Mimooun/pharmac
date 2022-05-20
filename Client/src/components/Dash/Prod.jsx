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

function Prod() {
  const [Products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const [data, setData] = useState();
  const [Produit, setProduit] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/produits").then((response) => {
      setProduit(response.data);
    });
  }, []);
  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Details: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const actions = [
    // {
    //   icon: Edit,
    //   tooltip: "Edit User",
    //   position: "row",
    //   onClick: (event, rowData) => {
    //     // history.push({
    //     //     pathname: "/home/students/updateStudents",
    //     //     Student: rowData
    //     // })
    //   },
    // },
    {
      icon: Delete,
      tooltip: "Delete Produit",
      position: "row",
      onClick: (event, rowData) => {
        Axios.post("http://localhost:3001/deletepro", {
          id_pr: rowData.id_produit,
        }).then((response) => {});
        Axios.get("http://localhost:3001/produits").then((response) => {
          setProduit(response.data);
        });
      },
    },
  ];
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="addcommande">
        <Link to="/Dash/Add">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3ecfa3",
              color: "white",
            }}
          >
            Ajouter Produit
          </Button>
        </Link>
      </div>
      <MaterialTable
        icons={tableIcons}
        title="Products"
        columns={[
          { title: "ID Products", field: "id_produit" },
          { title: "Libelle Products", field: "libelle_produit" },
          { title: "Quantite", field: "qantite" },
          {
            title: "Price",
            field: "prix",
          },
        ]}
        data={Produit}
        actions={actions}
        options={{
          actionsColumnIndex: -1,
          selection: true,
        }}
      />
    </div>
  );
}

export default Prod;
