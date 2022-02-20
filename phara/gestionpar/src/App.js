
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Oursite from './components/Oursite';
import Products from './components/Products';
import Owlprod from './components/Owlprod';
import Chose from './components/Chose';
import Experience from './components/Experience';
import Pipeline from './components/Pipeline';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Home></Home>
      <Oursite></Oursite>
      <Products></Products>
      <Owlprod></Owlprod>
      <Chose></Chose>
      <Experience></Experience>
      <Pipeline></Pipeline>
      <Testimonial></Testimonial>
      <Footer></Footer>

    </div>
  );
}

export default App;
