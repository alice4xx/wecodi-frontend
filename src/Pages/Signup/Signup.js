import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {

      firstName: null,
      lastName: null,
      email: null,
      password: null,
      
      }
    };

  handleSubmit = e => {
    e.preventDefault();
  }


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
              <button type="submit">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div> 
      );
    }
  }
 
export default Signup;


