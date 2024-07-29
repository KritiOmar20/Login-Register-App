import React, { useState } from 'react';
import LoginForm from './Components/LoginForm';
import RegisterForm from './Components/RegisterForm';
import './App.css';


const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  return (
    <div className="form-container">
      {isLogin ? (
        <LoginForm switchToRegister={switchToRegister} />
      ) : (
        <RegisterForm switchToLogin={switchToLogin} />
      )}
    </div>
  );
};

export default App;
