//import { render } from '@testing-library/react';
import React, { Component } from 'react';

//import '../style/bootstrap.min.css';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loginUser = async (credentials) => {
    const data = await fetch('https://localhost:44383/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:credentials
    });
    return  data.json();
  }

  async handleSubmit(event) {
    event.preventDefault();
    var email = this.state.email;
    var password = this.state.password;
    const token = await this.loginUser({
      email,
      password
    });
    
    if(token !=null) {
      this.props.history.replace("/dashboard");
    }
  }
//value = {this.state.email} value = {this.state.password}
  renderLoginForm = () => (
    <div className="form row d-flex justify-content-center align-items-center h-100">
      <form id="LoginForm" onSubmit={this.handleSubmit}>
        <div className="form-outline mb-4">
          <input type="text" name="email" className="form-control" required placeholder="Email" 
  					 	 onChange = { event => this.setState({email: event.target.value})}></input>
         
        </div>
        <div className="form-outline mb-4">
          
          <input type="password" name="pswd" className="form-control" required placeholder="Password" 
  					 	 onChange = { event => this.setState({password: event.target.value})}></input>
        </div>
        <div>
          <input type="submit" className="btn btn-primary btn-lg"></input>
        </div>
        <div>
          <a href="/">Forgot Password</a>
        </div>
      </form>
    </div>
  );

  render() {
    return (
      <div className="App">
        <div className="Login-Form container-fluid h-custom">
          <div className="title">GEMS Cloud Web Application</div>
          {this.renderLoginForm()}
        </div>
      </div>
    );
  
  }
  
}

export default App;
