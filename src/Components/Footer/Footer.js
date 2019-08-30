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
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a target="_blank" className="ourMember" href="/">
                    Soongyu Kwon
                  </a>
                </li>
                <li>
                  <a target="_blank" className="ourMember" href="/">
                    kamsa kim
                  </a>
                </li>
                <li>
                  <a target="_blank" className="ourMember" href="/">
                    I Re Shin
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="ourMember"
                    href="https://alice4xx.github.io/"
                  >
                    JinKyung Lee
                  </a>
                </li>
                <li>
                  <a target="_blank" className="ourMember" href="/">
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
