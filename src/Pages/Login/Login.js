import React, { Component } from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom';
import Google from '../../Images/google_logo.png';
import Facebook from '../../Images/facebook_logo.png';
import Kakaotalk from '../../Images/kakaotalk_logo.png';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      EmailValue: '',
      PwValue: '',
    };
  }

  componentDidMount() {
    window.Kakao.init('0d3eb99a0ab9c7b96fcfacc9f8169438');
  }

  changeEmailValue = e => {
    this.setState({
      EmailValue: e.target.value,
    });
  };

  changePwValue = e => {
    this.setState({
      PwValue: e.target.value,
    });
  };

  clickLogInButton = () => {
    if (this.state.EmailValue.length === 0) {
      alert('email 입력해주세요');
      return;
    }
    if (this.state.PwValue.length === 0) {
      alert('pw 입력해주세요');
      return;
    }
    fetch('http://10.58.2.142:8001/user/login ', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: this.state.EmailValue,
        user_pw: this.state.PwValue,
      }),
    })
      .then(response => response.json())
      .then(response => {
        //console.log(response);
        if (response.TOKEN) {
          localStorage.setItem('wecodi_token', response.TOKEN);
          this.props.history.push('/');
        }
        // else if (response.error_message) {
        //   alert(response.error_message);
        // }
      });
  };
  clickKakaoBttn = () => {
    window.Kakao.Auth.login({
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      },
    });
  };
  render() {
    return (
      <div className="loginWrap">
        <div className="login-page">
          <div className="loginWordingWrap">
            <h3 className="loginWording"> Log In </h3>
          </div>
          <div className="emailpassword"> Email</div>
          <input
            onChange={this.changeEmailValue}
            type="email"
            className="addressBox"
            placeholder="Email address"
          />
          <div className="emailpassword"> Password</div>
          <input
            onChange={this.changePwValue}
            type="password"
            className="passwordBox"
            placeholder="Password"
          />
          <button className="LogInBttn" onClick={this.clickLogInButton}>
            {' '}
            Log In{' '}
          </button>

          <div className="forgot">
            <a href="/" className="forgot-1">
              Or you can join with,
            </a>

            <div className="social--Login">
              <div className="social-LoginWrap">
                <div className="socialLogin">
                  <div className="imageCenter">
                    <img
                      src={Google}
                      alt="googlelogo"
                      onClick={this.clickKakaoBttn}
                    />
                  </div>
                </div>
                <div className="socialLogin">
                  <div className="imageCenter">
                    <img
                      src={Facebook}
                      alt="facebooklogo"
                      onClick={this.clickKakaoBttn}
                    />
                  </div>
                </div>

                <div className="socialLogin">
                  <div className="imageCenter">
                    <img
                      src={Kakaotalk}
                      alt="kakaotalklogo"
                      onClick={this.clickKakaoBttn}
                    />
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

export default withRouter(Login);
