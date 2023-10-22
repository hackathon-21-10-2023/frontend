import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Logo className={styles.root__logo} />
      <h1 className="h1">
        <Link to={'/profile'}>обратная связь</Link>
      </h1>
    </div>
  );
};
