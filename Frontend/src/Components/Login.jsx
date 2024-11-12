import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/user/login', { uname, pwd });
      alert('Login successful');
      navigate('/home');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Invalid credentials');
    }
  };

  const register = () => {
    navigate('/register');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={uname}
          onChange={(e) => setUname(e.target.value)}
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={register}>Create New Account</button>
    </form>
  );
};

export default Login;
