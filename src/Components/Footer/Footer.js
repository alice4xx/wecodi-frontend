import React, { Component } from 'react';
import './Footer.scss';
import Logo from '../../Images/logo-white.png';

class Footer extends Component {
  render() {
    return (
      <footer className="page--Footer">
        <div className="footerWrap">
          <div className="footerRow">
            <div className="logo--stacked">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <div className="footerListWrap">
              <ul className="footerList">
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a target="_blank" href="https://soongyu.github.io/">
                    Soongyu Kwon
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://playwright20.github.io/">
                    kamsa kim
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://babytiger.netlify.com">
                    I Re Shin
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://alice4xx.github.io/">
                    JinKyung Lee
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://rumbarum.github.io/">
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
