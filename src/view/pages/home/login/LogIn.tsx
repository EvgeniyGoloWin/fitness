import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router';

export const LogIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    navigate('/registration');
  };

  return (
    <div className="wrapper_login">
      <div className="login_form">
        <h1 className="login_form_title">Вход</h1>
        <input
          className="login_form_input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="login_form_input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="login_form_bnt">Войти</button>
        <button className="login_form_bnt" onClick={handleRegister}>
          {' '}
          Регистрация
        </button>
      </div>
    </div>
  );
};
