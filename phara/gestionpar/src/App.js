
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

    </div>
  );
}

export default App;
