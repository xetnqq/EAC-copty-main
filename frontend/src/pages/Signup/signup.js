import React, { Component } from 'react';
import './signup.css';

class Signup extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        email: '',
        password: ''
      };
    }

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value });
}

handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, password } = this.state;

  try {
    const response = await fetch('/api/create_user', {
      method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'username': name,
            'email': email,
            'password': password
        }
});

  if (response.ok) {
    alert('User registered successfully!');
      this.setState({ name: '', email: '', password: '' });
    } else {
        alert('Registration failed. Please try again.');
}
} catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
}
}

render() {
    const { name, email, password } = this.state;

    return (
            <div className="container65">
                <div className="header-banner"></div>
                <div className="main-content">
                    <a href='/' className='dec'><div className="login-title">Log In</div></a>
                    <div className='signup-option'>
                        <div className="sign-up-title">Sign Up</div>
                        <div className='signup-underline'></div>
                    </div>
                </div>
                <div className="profile-section">
                    <form onSubmit={this.handleSubmit}>

                            <div className="name-section">
                                <input className='input-name' type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name" required />
                            </div>

                        <div className="email-section">
                            <input className='input-email' type="email" name="email" value={email} onChange={this.handleChange} placeholder="Email" required />
                        </div>
                        <div className="password-section">
                            <input className='input-password' type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password" required />
                        </div>
                        <button className="sign-up-button" tabIndex='0'>Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;