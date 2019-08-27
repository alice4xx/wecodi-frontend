import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="loginWrap">
        <div className="login-page">
          <div className="loginWording"> Log In </div>
          <div className="emailpassword"> EMAIL</div>
          <input
            type="text"
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
      </div>
    );
  }
}

export default Login;
