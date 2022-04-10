import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QtyPicker from './components/qtyPicker';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/about";
import Cart from "./components/cart.jsx";
import Admin from "./components/admin.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home.jsx';
import GlobalState from "./context/globalState.jsx";

function App() {
  return(
    <div className = "App">
      <GlobalState>
        <BrowserRouter>
          <NavBar></NavBar>

          <Routes>
            <Route path="/" element = {<Home/>}></Route>
            <Route path="/catalog" element = {<Catalog/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/about" element = {<About/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
          </Routes>

          <Footer></Footer>
        </BrowserRouter>
      </GlobalState>
    </div>);
}

export default App;