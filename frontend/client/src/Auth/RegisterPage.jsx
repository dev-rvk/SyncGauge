import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
    // Perform registration logic here (e.g., API calls, saving to database, etc.)
    // For this example, let's just log the values for username and password.
    console.log('Registered Username:', username);
    console.log('Registered Password:', password);

    // Set isRegistered to true to trigger the redirection.
    setIsRegistered(true);
  };

  if (isRegistered) {
    // Redirect to the login page after successful registration.
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
