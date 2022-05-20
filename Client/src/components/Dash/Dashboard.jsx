import React from "react";
import "../../styles/Dash/Dashboard.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import DashboardPage from "./DashboardPage";
import Navdash from "./Navdash";
import Prod from "./Prod";
import Adminlog from "./Adminlog";
import Cmd from "./Cmd";
import Pay from "./Pay";
import Down from "./Down";
import Add from "./Add";


function Dashboard() {
  return (
    <Router>
      <div className="App">
        <div className="app__body">
          <Sidebar />
          <div className="dashboard-container">
            <Navdash />
            <div className="dashboard-body">
              <Switch>
                <Route exact path="/Admin" component={() => <Adminlog />} />
                <Route exact path="/Dash" component={() => <DashboardPage />}></Route>
                <Route exact path="/Dash/Main" component={() => <DashboardPage />}></Route>
                <Route exact path="/Dash/Prod" component={() => <Prod />}></Route>
                <Route exact path="/Dash/Cmd" component={() => <Cmd />}></Route>
                <Route exact path="/Dash/Down" component={() => <Down/>}></Route>
                <Route exact path="/Dash/Pay" component={() => <Pay />}></Route>
                <Route exact path="/Dash/Add" component={() => <Add />}></Route>
                
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
