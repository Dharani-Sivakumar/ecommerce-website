import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import '../Login/login.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Import the useNavigate hook

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least 8 characters, including uppercase, lowercase, number, and special characters.');
      return;
    }
    
    // Your authentication logic here...

    // Assuming authentication is successful
    // Redirect user to home page
    navigate("/");
  };

  return (
    <div>
      <Navbar/>
      <div className='login-title'>
            <h1>LOGIN</h1>
            <p>glad you are back, we have missed you</p>
        </div>
      <div className="login-page">
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="login-email">
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login-password">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot-pass">
          <p>Forget Password</p>
        </div>
       <div className="login-button">
       <button type="submit">Login To My Account</button>
       </div>
       <div className="reg-acc">
        <p>Don't have account yet?</p>
        <Link to="/Register"><h5>Create it here.</h5></Link>
       </div>
      </form>
      </div>
    </div>
  )
}

export default Login;