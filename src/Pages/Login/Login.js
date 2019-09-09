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
      textbox: false,
      message: '',
    };
  }
  // testa:

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
<<<<<<< HEAD
    fetch('http://10.58.6.30:8000/user/login', {
=======
    fetch('http://13.125.254.18:8000/user/login', {
>>>>>>> 20643fddaa8688ac425bd7774ed98241d234c43e
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.EmailValue,
        password: this.state.PwValue,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.TOKEN) {
          localStorage.setItem('wecodi_token', response.TOKEN);
          this.props.history.push('/');
        } else if (response.message === 'INVALID_EMAIL_ADDRESS') {
          this.setState({
            textbox: true,
            message: '아이디 혹은 비밀번호를 확인해주세요.',
          });
        }
      });
  };

  // clickKakaoBttn = () => {
  //   window.Kakao.Auth.login({
  //     success: authObj => {
  //       alert(JSON.stringify(authObj));

  //       fetch('', {
  //         headers: {
  //           Authorization: authObj.access_token,
  //         },
  //       })
  //         .then(response => response.json())
  //         .then(response => {
  //           console.log(response);
  //           if (response.access_token) {
  //             localStorage.setItem('wecodi_token', response.access_token);
  //             this.props.history.push('/');
  //           }
  //         });
  //     },
  //     fail: function(err) {
  //       alert(JSON.stringify(err));
  //     },
  //   });
  // };

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
          {this.state.textbox && (
            <div className="MessageWrap">
              <div className="MessageBox">
                <i className="fas fa-ban" />
                <p className="MessageBody">{this.state.message}</p>
                <div className="ButtonWrap">
                  <div
                    className="Button"
                    onClick={() => {
                      this.setState({ textbox: !this.state.textbox });
                    }}
                  >
                    확인
                  </div>
                </div>
              </div>
            </div>
          )}
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
