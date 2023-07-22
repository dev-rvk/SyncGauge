import { useState } from 'react';
import {Navigate} from "react-router-dom";
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/auth/';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = async () => {
    try {

      // Send the user's login credentials to the Django backend for authentication
      const response = await axios.post(`${API_BASE_URL}login`, {
        email: username, // In your case, you might use 'username' instead of 'email'
        password: password,
      });

      // If the response is successful, the user is authenticated
      const accessToken = response.data.access;

      // Save the access token to local storage or session storage for future requests.
      localStorage.setItem('accessToken', accessToken);

      // Set the isLoggedIn state to true to redirect to the Dashboard
      setIsLoggedIn(true);

    console.log('Username:', username);
    console.log('Password:', password);
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., display an error message)
    }

  };

  if(isLoggedIn){
      console.log('redirecting...')
      return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;


