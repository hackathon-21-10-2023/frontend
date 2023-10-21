import React from 'react';
import styles from './index.module.scss';
import { ReactComponent as Logo } from '../../img/logo.svg';

export const Header = () => {
  return (
    <div className={styles.root}>
      <Logo className={styles.root__logo} />
      <h1>обратная связь</h1>
    </div>
  );
};
