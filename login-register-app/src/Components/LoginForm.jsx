import React from 'react';

const LoginForm = ({ switchToRegister }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="login-username">Username:</label>
        <input
          type="text"
          id="login-username"
          name="username"
          placeholder="username"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password:</label>
        <input
          type="password"
          id="login-password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <button type="submit" className="btn">Login</button>
      <p>Don't have an account? <a href="#" onClick={switchToRegister}>Register here</a></p>
    </form>
  );
};

export default LoginForm;
