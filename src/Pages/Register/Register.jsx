import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import '../Login/login.css'

const Register = () => {
    const navigate = useNavigate();
  
  // State variables to store user input
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Function to handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 8 characters, including uppercase, lowercase, number, and special characters.');
      return;
    }
    navigate("/Login");
  };

  return (
    <div>
        <Navbar/>
        <div className='login-title'>
            <h1>CREATE ACOUNT</h1>
            <p>to take advantage of personalized shopping</p>
        </div>
        <div className='reg-form'>
      <form onSubmit={handleRegister}>
        <div className='reg-name'>
          <input
            type="text"
            id="firstName"
            placeholder='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className='reg-name'>
          <input
            type="text"
            id="lastName"
            placeholder='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className='reg-name'>
          <input
            type="email"
            id="email"
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='reg-name'>
          <input
            type="tel"
            id="mobileNumber"
            placeholder='mobile number'
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
          />
        </div>
        <div className='reg-name'>
          <input
            type="text"
            id="address"
            placeholder='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className='reg-name'>
          <input
            type="password"
            id="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p>{error}</p>}
        <div className="reg-button">
        <button type="submit">Register</button>
        </div>
      </form>
     
    </div>
    </div>
  );
};

export default Register
