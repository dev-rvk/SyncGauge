import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {

  const [isRegistered, setIsRegistered] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setFormData(currData => {
        return {
            ...currData,
            [event.target.name]: event.target.value
        }
    })
  };
  const handleSubmit = (event) => {
    // Perform registration logic here (e.g., API calls, saving to database, etc.)
    event.preventDefault();
    // Send the registration data to the server using Axios
    axios.post('http://127.0.0.1:8000/auth/register', formData)
      .then((response) => {
        console.log('Registration successful:', response.data);
        // You can add a redirect or other actions after successful registration.
        //       console.log('Registered Name:', formData.name);
        // console.log('Registered Username:', formData.username);
        // console.log('Registered Password:', formData.password);
        // Set isRegistered to true to trigger the redirection.
        setIsRegistered(true)
      })
    .catch((error) => {
        console.error('Registration failed:', error.response.data);
        // Handle registration error here.
      });
  };

  if (isRegistered) {
    // Redirect to the login page after successful registration.
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div>
                <label htmlFor="username">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
          </div>
          <div>
                <label htmlFor="username">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
          </div>
          <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
          </div>
          <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
