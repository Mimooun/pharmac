import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Form from '../src/components/Form';
import Signup from "../src/components/Signup";
import Listep from "./components/Listep";
import Detailsproduct from "./components/Detailsproduct";
import Panier from "./components/Panier";
import Adminlog from "./components/Dash/Adminlog";
import Axios from "axios";
import Dashboard from "./components/Dash/Dashboard";


function App() {
  Axios.defaults.withCredentials = true;
  return (
    <Router>
      <div>

        <Switch >
         <Route exact path="/" component={HomePage} />
         <Route exact path="/Login" component={Login}  />
         <Route exact path="/form" component={Form}   />
         <Route exact path="/Signup" component={Signup} />
         <Route exact path="/Listep" component={Listep} />
         <Route exact path="/panier" component={Panier} />
         <Route exact path="/Detailsproduct" component={Detailsproduct} />
         <Route exact path="/Detailsproduct" component={Detailsproduct} />
         <Route exact path="/Dash" component={Dashboard} />
         <Route  path="/Adminlog" component={Adminlog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;