import React, { Component } from 'react';
import './Login.scss';
import Footer from '../../Components/Footer/Footer.js';

class Login extends Component {
  render() {
    return (
      <div className="loginWrap">
        <div className="login-page">
          <div className="login-page-3">
            <div className="loginWordingWrap">
              <h3 className="loginWording"> Log In </h3>
            </div>
            <div className="emailpassword"> EMAIL</div>
            <input
              type="email"
              className="addressBox"
              placeholder="Email address"
            />
            <div className="emailpassword"> PASSWORD </div>
            <input
              type="password"
              className="passwordBox"
              placeholder="Password"
            />
            <button className="LogInBttn"> Log In </button>
          </div>

          <div className="forgot">
            <a href="/" className="forgot-1">
              Forgot your password?
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
