import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from '../../Images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Wrapper">
          <div id="logo">
            <a href="/">
              <img src={Logo} alt="logo" width="140" />
            </a>
          </div>
          <ul className="Menu">
            <li className="MenuList">
              <a href="/">FASHION TIPS</a>
            </li>
            <li className="MenuList">
              <a href="/">OUTFIT IDEAS</a>
            </li>
            <li className="MenuList">
              <a href="/">INSIDE STITCH FIX</a>
            </li>
          </ul>
          <div className="LoginWrap">
            <Link to="/login">
              <div className="Login">Login</div>
            </Link>
            <Link to="/signup">
              <div className="Signup">Signup</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
