import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const nav = useNavigate();
  return (
    <div className={styles.root}>
      <h2>вход в систему</h2>
      <div className={styles.root__form}>
        <label>
          Логин
          <input type="email" name="email" id="em" placeholder="your.email@greensight.ru" />
          <span></span>
        </label>
        <label>
          Пароль
          <input type="password" name="password" id="pass" />
          <span></span>
        </label>
      </div>
      <div className={styles.root__footer}>
        <button type="button" onClick={() => nav('/profile')}>
          Войти
        </button>
      </div>
    </div>
  );
};
