import React, { useState } from 'react';

function PasswordStrength(props) {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    // Check the password strength
    if (password.length === 0) {
      setStrength(null);
    } else if (password.length <= 2) {
      setStrength('weak');
    } else if (password.length <= 6) {
      setStrength('medium');
    } else {
      setStrength('strong');
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          className="password-input"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <input
        className="submit-button"
        type="submit"
        value="Submit"
        disabled={strength === 'weak'}
      />
      {strength && (
        <p className="password-strength">
          Password strength: <strong>{strength}</strong>
        </p>
      )}
    </form>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Password Strength Checker</h1>
      <PasswordStrength />
    </div>
  );
}

export default App;
