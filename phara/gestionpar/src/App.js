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
         <Route path="/home" component={Home} />
         <Route path="/Oursite" component={Oursite} />
         <Route path="/Products" components={Products} />
         <Route path="/owlprod" components={Owlprod} />
         <Route path="/chose" components={Chose} />
         <Route path="/experience" components={Experience} />
         <Route path="/pipeline" components={Pipeline} />
         <Route path="/testimonial" components={Testimonial} />
         <Route path="/contact" components={Contact} />
         <Route path="/footer" components={Footer} />
         <Route exact path="/form" components={Form} />
        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
