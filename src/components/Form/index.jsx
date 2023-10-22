import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Form = () => {
  const nav = useNavigate();

  const [inputOne, setInputOne] = React.useState('');
  const [inputTwo, setInputTwo] = React.useState('');

  const onBtnClick = () => {
    let loginState = {
      login: inputOne,
      pass: inputTwo,
    };

    axios
      .post('https://hackathon-21-10-2023.adoge.ru/auth/login/', {
        login: loginState.login,
        password: loginState.pass,
      })
      .then(function (response) {
        localStorage.setItem('jwt', JSON.stringify(response.data.token));
        nav('/profile');
      })
      .catch(function (error) {
        console.log(error);
        nav('/');
      });
  };

  return (
    <div className={styles.root}>
      <h2>вход в систему</h2>
      <div className={styles.root__form}>
        <label>
          Логин
          <input
            value={inputOne}
            type="email"
            name="email"
            id="em"
            placeholder="your.email@greensight.ru"
            onChange={(event) => setInputOne(event.target.value)}
          />
          <span></span>
        </label>
        <label>
          Пароль
          <input
            value={inputTwo}
            type="password"
            name="password"
            id="pass"
            onChange={(event) => setInputTwo(event.target.value)}
          />
          <span></span>
        </label>
      </div>
      <div className={styles.root__footer}>
        <button type="submit" onClick={onBtnClick}>
          Войти
        </button>
      </div>
    </div>
  );
};
