import React from 'react';
import styles from './index.module.scss';

export const Subvision = () => {
  const data = 'Команда разработки мобильного приложения';
  return (
    <div className={styles.root}>
      <h2>подразделение</h2>
      <div>{data}</div>
    </div>
  );
};
