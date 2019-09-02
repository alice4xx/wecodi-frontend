import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';
import Footer from '../../Components/Footer/Footer';
import {Link} from 'react-router-dom';

  

class Signup extends Component {

    
      Singup = async () => {
    
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
        <div className="input-wrapper">
          <div className="input-box">
            <h1>Sign up</h1>
            <div className="" onSubmit={this.handleSubmit} noValidate>
              <div className="firstName">
                Firstname
              </div>
              <input type="text" className="inputFirst" placeholder="Firstname" noValidate onChange={this.handleChange} />
              <div className="lastName">
                Lastname
              </div>
              <input type="text" className="inputLast" placeholder="Lastname" noValidate onChange={this.handleChange} />
              <div className="email">
                Email
              </div>
              <input type="email" className="inputEmail" placeholder="Email address" noValidate onChange={this.handleChange} />
              <div className="password">
                Password
              </div>
              <input type="password" className="inputPw" placeholder="Password" noValidate onChange={this.handleChange} />
              <div className="createAccount">
                <button type="submit" value="Register" onClick={this.singup}> Signup </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
      );
    }
  }
 
  export default withRouter(Signup);


