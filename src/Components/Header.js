import React, { Component } from 'react';
import './Header.scss';
import Logo from '../Images/logo.png'

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
            <div className="Login"><a href="/">Login</a></div>
            <div className="Signup"><a href="/">Signup</a></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;