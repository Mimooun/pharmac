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


function App() {
  return (
    <Router>
      <div>
        <Switch >
         <Route exact path="/" component={HomePage} />
         <Route exact path="/Login" component={Login}  />
         <Route exact path="/form" component={Form}   />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
