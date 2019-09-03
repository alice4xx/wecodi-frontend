import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BarsMenu from './BarsMenu';
import './Header.scss';
import Logo from '../../Images/logo.png';

const Header = () => {
  const [mode, setMode] = useState(true);

  return (
    <div className="Header">
      <div className="Wrapper">
        <div id="logo">
          <a href="/">
            <img className="logo" src={Logo} alt="logo" />
          </a>
          <div className="Bars" onClick={() => setMode(!mode)}>
            <i className="fas fa-bars BarsBtn" />
          </div>
          <BarsMenu mode={mode} handleClick={() => setMode(!mode)} />
        </div>
        <ul className="Menu">
          <li className="MenuList">
            <Link to="/fashion-tips">FASHION TIPS</Link>
          </li>
          <li className="MenuList">
            <Link to="/outfit-ideas">OUTFIT IDEAS</Link>
          </li>
          <li className="MenuList">
            <Link to="/inside-stitch-fix">INSIDE STITCH FIX</Link>
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
};

export default Header;
