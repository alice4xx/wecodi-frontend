import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarsMenu from './BarsMenu';
import './Header.scss';
import Logo from '../../Images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: true,
    };
  }

  barsClick = () => {
    this.setState({
      mode: !this.state.mode,
    });
  };

  render() {
    return (
      <div className="Header">
        <div className="Wrapper">
          <div id="logo">
            <a href="/">
              <img className="logo" src={Logo} alt="logo" />
            </a>
            <div className="Bars" onClick={this.barsClick}>
              <i className="fas fa-bars BarsBtn" />
            </div>
            <BarsMenu mode={this.state.mode} handleClick={this.barsClick} />
          </div>
          <ul className="Menu">
            <li className="MenuList">
              <Link to="/fashion-tops">FASHION TIPS</Link>
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
  }
}

export default Header;
