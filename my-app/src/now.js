import React, { useState } from 'react';

function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    // Check the username and password
    if (username === 'admin' && password === 'password') {
      // Login successful, close the login form
      props.onClose();
    } else {
      // Login failed, show an error message
      alert('Invalid username or password.');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  function handleLoginClick() {
    setShowLoginForm(true);
  }

  function handleCloseClick() {
    setShowLoginForm(false);
  }

  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <button onClick={handleLoginClick}>Login</button>
      {showLoginForm && (
        <div className="login-form">
          <LoginForm onClose={handleCloseClick} />
          <button onClick={handleCloseClick}>Close</button>
        </div>
      )}
      <PasswordStrength />
    </div>
  );
}

export default App;
