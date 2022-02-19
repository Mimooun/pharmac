
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Oursite from './components/Oursite';
import Products from './components/Products';
import Owlprod from './components/Owlprod';
import Chose from './components/Chose';
import Experience from './components/Experience';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Oursite />
      <Products />
      <Owlprod />
      <Chose />
      <Experience />
    </div>
  );
}

export default App;
