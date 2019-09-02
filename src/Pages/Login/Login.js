import React, { Component } from 'react';
import './Login.scss';
import Google from '../../Images/google_logo.png';
import Facebook from '../../Images/facebook_logo.png';
import Kakaotalk from '../../Images/kakaotalk_logo.png';

class Login extends Component {
  render() {
    return (
      <div className="loginWrap">
        <div className="login-page">
          <div className="login-page-3">
            <div className="loginWordingWrap">
              <h3 className="loginWording"> Log In </h3>
            </div>
            <div className="emailpassword"> Email</div>
            <input
              type="email"
              className="addressBox"
              placeholder="Email address"
            />
            <div className="emailpassword"> Password</div>
            <input
              type="password"
              className="passwordBox"
              placeholder="Password"
            />
            <button className="LogInBttn"> Log In </button>
          </div>

          <div className="forgot">
            <a href="/" className="forgot-1">
              Or you can join with,
            </a>

            <div className="social--Login">
              <div className="social-LoginWrap">
                <div className="socialLogin">
                  <div className="imageCenter">
                    <img src={Google} alt="googlelogo" width="35" />
                  </div>
                </div>
                <div className="socialLogin">
                  <div className="imageCenter">
                    <img src={Facebook} alt="facebooklogo" width="39" />
                  </div>
                </div>
                <div className="socialLogin">
                  <div className="imageCenter">
                    <img src={Kakaotalk} alt="kakaotalklogo" width="35" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
