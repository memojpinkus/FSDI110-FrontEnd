import "./navBar.css";
import {Link} from "react-router-dom"
import { useContext } from "react";
import store from "../context/storeContext";

const NavBar = () => {
  const cart = useContext(store).cart;

  const getNumber = () =>{
    //sum all the quantity in the array
    //and return the total
    let total = 0;

    for(let i=0; i < cart.length; i++){
      let prod = cart[i];
      total += prod.quantity;
    }
    return total;
  }

    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MusicCenter</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catalog">Catalog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin">Admin</Link>
          </li>
        </ul>
        <form className="d-flex">
          <Link to="/cart" className="btn btn-outline-info">
            <span className="badge bg-primary">{getNumber()}</span> View Cart
          </Link>
        </form>
      </div>
    </div>s
  </nav>
  );
};

export default NavBar;