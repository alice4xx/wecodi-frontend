import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import BarsMenu from './BarsMenu';
import './Header.scss';
import Logo from '../../Images/logo.png';

const Header = props => {
  const [mode, setMode] = useState(true);
  const [token, setToken] = useState(false);
  const WecodiToken = localStorage.getItem('wecodi-token');

  const getToken = () => {
    if (WecodiToken) {
      setToken(!token);
    }
  };

  const logout = () => {
    localStorage.setItem('wecodi-token', '');
    setToken(!token);
    props.history.push('/');
  };

  useEffect(() => {
    getToken();
  });

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
            <Link to="/inside-wecodi">INSIDE WECODI</Link>
          </li>
        </ul>
        <div className="LoginWrap">
          {token ? (
            <>
              <Link to="/login">
                <div className="Login">Login</div>
              </Link>
              <Link to="/signup">
                <div className="Signup">Signup</div>
              </Link>
            </>
          ) : (
            <>
              <div className="Login" onClick={logout}>
                Logout
              </div>
              <Link to="/about">
                <div className="Signup">About</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
