import React, { } from "react";
import '../styles/Dashboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import DashboardPage from "./DashboardPage";


function Dashboard () {
        return (
            <div className="App">
                <div className="app__body">
                    <Sidebar />
                    <div className="dashboard-container">
                        <Navbar />
                        <div className="dashboard-body">
                            <Router>
                                <Switch>
                                    <Route path="/" component={() => <DashboardPage />}></Route>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default Dashboard;