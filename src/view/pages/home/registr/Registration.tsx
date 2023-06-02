import React, { useState } from 'react';
import '../registr/registr.css';
import { useNavigate } from 'react-router-dom';

export const Registration: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    navigate('/');
  };

  return (
    <div className="wrapper_registration">
      <div className="registration_form">
        <h1 className="registration_form_title">Регистрация</h1>
        <input
          className="registration_form_input"
          type="text"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          className="registration_form_input"
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="registration_form_btn">Зарегистрироваться</button>
        <button className="registration_form_btn" onClick={handleLogin}>
          Войти
        </button>
      </div>
    </div>
  );
};
