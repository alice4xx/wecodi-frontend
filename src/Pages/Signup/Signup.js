import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Signup.scss';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

class Signup extends Component {
  Singup = async () => {
    const response = await fetch('http://10.58.4.74:8000/signup', {
      method: 'POST',

      body: JSON.stringify({
        user_id: '12341234sdfsdfsfsdfsd',
        password: 'good',
      }),
    });
    const result = await response.json();
    if (result.message === 'same ID exists') {
      alert('이미 있는 아이디 입니다!! 다시 가입 해주세요.');
    } else if (result.message === 'SUCCESS') {
      alert('환영합니다!! 가입 되었습니다!!!');
      this.props.history.push('/login');
    }
  };

  clickSignupBtn = async () => {
    const { firstname, lastname, email, password } = this.state;

    if (firstname.length === 0) {
      alert('Plz write your firstname');
      return;
    }

    if (lastname.length === 0) {
      alert('Plz write your lastname');
      return;
    }

    if (email.length === 0) {
      alert('Plz write your email address');
      return;
    }

    if (password.length === 0) {
      alert('Plz write your password');
      return;
    }

    fetch('http://10.58.4.149:8000/user', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        last_name: this.state.lastname,
        first_name: this.state.firstname,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.message === 'SUCCESS!') {
          alert('회원가입을 축하합니다.');

          this.props.history.push('/login');
        } else {
          alert(response.error_message);
        }
      });
  };

  setFirstname = e => {
    this.setState({ firstname: e.target.value });
  };

  setLastname = e => {
    this.setState({ lastname: e.target.value });
  };

  setEmail = e => {
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className="signup-page">
        <div className="input-wrapper">
          <div className="signup-title-box">
            <h1>Sign up</h1>
          </div>
          <div className="firstName">Firstname</div>
          <input
            type="text"
            className="inputFirst"
            placeholder="Firstname"
            value={this.state.firstname}
            maxLength="20"
            onChange={this.setFirstname}
          />
          <div className="lastName">Lastname</div>
          <input
            type="text"
            className="inputLast"
            placeholder="Lastname"
            value={this.state.lastname}
            onChange={this.setLastname}
            maxLength="20"
          />
          <div className="email">Email</div>
          <input
            type="email"
            className="inputEmail"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.setEmail}
            maxLength="30"
          />
          <div className="password">Password</div>
          <input
            type="password"
            className="inputPw"
            placeholder="Password"
            value={this.state.password}
            onChange={this.setPassword}
            maxLength="15"
          />
          <div className="createAccount">
            <button
              type="button"
              className="signup-btn"
              value="Register"
              onClick={this.clickSignupBtn}
            >
              {' '}
              Signup{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
