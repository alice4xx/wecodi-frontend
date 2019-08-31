import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';
import {Link} from 'react-router-dom';
  

class Signup extends Component {

    
      singup = async () => {
    
        const response = await fetch('http://10.58.4.74:8000/signup', {
    
          method: 'POST',
    
          body: JSON.stringify({
            user_id: '12341234sdfsdfsfsdfsd',
            password: 'good'
          })
        });   
        const result = await response.json();
        console.log(result)
    
        console.log('sdfsdf')
        if (result.message === 'same ID exists') {
          alert('이미 있는 아이디 입니다!! 다시 가입 해주세요.')
        } else if (result.message === 'SUCCESS') {
          alert('환영합니다!! 가입 되었습니다!!!')
          this.props.history.push('/login');
        }
      };

  render() {
    return (
     <div className="signup-page">
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Sign up</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Firstname<input type="text" className="inputFirst" placeholder="Firstname" noValidate onChange={this.handleChange} /></label>
            </div>
            <div className="lastName">
              <label htmlFor="LastName">Lastname<input type="text" className="inputLast" placeholder="Lastname" noValidate onChange={this.handleChange} /></label>
            </div>
            <div className="email">
              <label htmlFor="email">Email<input type="email" className="inputEmail" placeholder="Email address" noValidate onChange={this.handleChange} /></label>
            </div>
            <div className="password">
              <label htmlFor="password">Password<input type="password" className="inputPw" placeholder="Password" noValidate onChange={this.handleChange} /></label>
            </div>
            <div className="createAccount">
              <button type="submit" value="Register" onClick={this.singup}> Signup </button>
            </div>
          </form>
        </div>
      </div>
    </div> 
      );
    }
  }
 
  export default withRouter(Signup);


