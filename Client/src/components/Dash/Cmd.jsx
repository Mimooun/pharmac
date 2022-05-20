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
import Delete from "@material-ui/icons/DeleteOutlineRounded";
import DoneIcon from "@mui/icons-material/Done";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useHistory } from 'react-router-dom'

import Swal from "sweetalert2";

function Cmd() {
  let history = useHistory();
  const [Products, setProducts] = useState([]);

  const [open, setOpen] = useState(false);

  const [data, setData] = useState();
  const [Produit, setProduit] = useState();
  const [Commande, setCommande] = useState();
  const [selectedRow, setSelectedRow] = React.useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/commande").then((response) => {
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
    {
      icon: DoneIcon,
      tooltip: "Validation",
      position: "row",
      onClick: (event, rowData) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "votre commande a bien été enregistrée",
          showConfirmButton: false,
          timer: 1500,
        });
      },
    },
    {
      icon: Delete,
      tooltip: "Delete",
      position: "row",
      onClick: (event, rowData) => {
        console.log(rowData);
        Axios.post("http://localhost:3001/deletecmd", {
          cmd: rowData.id_commande,
        }).then((response) => {
          Axios.get("http://localhost:3001/commande").then((response) => {
            setProduit(response.data);
            
          });
        });
      },
    },
    {
      icon: ArrowDownwardIcon,
      tooltip: "Dowlande",
      position: "row",
      onClick: (event, rowData) => {
        history.push({
            pathname: "/Dash/Print",
            
        })
    }
    },
  ];

  return (
    <div style={{ marginTop: "150px" }}>
      <MaterialTable
        icons={tableIcons}
        title="Commande"
        columns={[
          { title: "ID Commande", field: "id_commande" },
          { title: "Utilisateur", field: "id_utilisateur" },
          { title: "Date Commande", field: "date_commande" },
        ]}
        data={Produit}
        actions={actions}
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          selection: true,
        }}
      />
    </div>
  );
}

export default Cmd;
