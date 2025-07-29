// src/components/Auth.js
import { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAuth = async () => {
    // Mock authentication
    if (email && password) {
      alert(isRegistering ? 'Registration successful!' : 'Login successful!');
    } else {
      alert('Please enter email and password.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>
        {isRegistering ? 'Register' : 'Login'}
      </button>
      <p onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Already have an account? Login' : 'New here? Register'}
      </p>
    </div>
  );
};

export default Auth;
