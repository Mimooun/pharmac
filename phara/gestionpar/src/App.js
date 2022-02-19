
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Oursite from './component/Oursite';
import Products from './component/Products';
import Owlprod from './component/Owlprod';
import Chose from './component/Chose';
import Experience from './component/Experience';
import Pipeline from './component/Pipeline';
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
