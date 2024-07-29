import React from 'react';

const RegisterForm = ({ switchToLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="register-username">Username:</label>
        <input
          type="text"
          id="register-username"
          name="username"
          placeholder="username"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-email">Email:</label>
        <input
          type="email"
          id="register-email"
          name="email"
          placeholder="email address"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-password">Password:</label>
        <input
          type="password"
          id="register-password"
          name="password"
          placeholder="password"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="register-confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="register-confirm-password"
          name="confirmPassword"
          placeholder="confirm password"
          required
        />
      </div>
      <button type="submit" className="btn">Register</button>
      <p>Already have an account? <a href="#" onClick={switchToLogin}>Login here</a></p>
    </form>
  );
};

export default RegisterForm;
