import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assests/images/Kpn-logo.png';
import {UserOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import '../App.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex align-items-center">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Logo" height={55} />
        </Link>

        <div className="delivery-info ml-3">
          <b>Delivery in 30 mins</b><br />
          <span>Mylapore, Chennai</span>
        </div>

        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Browse All Categories
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link className="dropdown-item" to="/category/fruits">Fruits</Link>
            <Link className="dropdown-item" to="/category/vegetables">Vegetables</Link>
            {/* Add more categories as needed */}
          </div>
        </div>

        <form className="form-inline ml-3 flex-grow-1">
          <input
            className="form-control w-100"
            type="search"
            placeholder="Search for goodness..."
            aria-label="Search"
          />
        </form>

        <button className="navbar-toggler ml-3" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/"><UserOutlined />Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/fruits"><ShoppingCartOutlined />Cart</Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
