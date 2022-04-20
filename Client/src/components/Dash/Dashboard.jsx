import React from "react";
import "../../styles/Dash/Dashboard.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardPage from "./DashboardPage";
import Navdash from "./Navdash";
import Prod from "./Prod";
import Formi from "./Formi";


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
                <Route exact path="/Dash" component={() => <DashboardPage />}></Route>
                <Route exact path="/Dash/Main" component={() => <DashboardPage />}></Route>
                <Route exact path="/Dash/Prod" component={() => <Prod />}></Route>
                <Route exact path="/Formi" component={() => <Formi />}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Dashboard;
