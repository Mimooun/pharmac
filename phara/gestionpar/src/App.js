import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Home from "./components/Home";
import Oursite from "./components/Oursite";
import Products from "./components/Products";
import Owlprod from "./components/Owlprod";
import Chose from "./components/Chose";
import Experience from "./components/Experience";
import Pipeline from "./components/Pipeline";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch >
         <Route exact path="/" component={HomePage} />
         <Route exact path="/home" component={HomePage} />
         <Route exact path="/form" component={Form} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
