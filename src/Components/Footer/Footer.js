import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import Logo from '../../Images/logo-white.png';

class Footer extends Component {
  render() {
    return (
      <footer className="page--Footer">
        <div className="footerWrap">
          <div className="footerRow">
            <div className="logo--stacked">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="footerListWrap">
              <ul className="footerList">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <a href="https://soongyu.github.io/">
                    Soongyu Kwon
                  </a>
                </li>
                <li>
                  <a href="https://velog.io/@apollostk/">
                    kamsa kim
                  </a>
                </li>
                <li>
                  <a href="https://babytiger.netlify.com">
                    I Re Shin
                  </a>
                </li>
                <li>
                  <a href="https://alice4xx.github.io/">
                    JinKyung Lee
                  </a>
                </li>
                <li>
                  <a href="https://rumbarum.github.io/">
                    Bareum Han
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
