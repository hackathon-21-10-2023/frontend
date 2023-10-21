import React from 'react';
import styles from './index.module.scss';

export const Card = ({ arrow }) => {
  console.log(arrow);
  return (
    <button type="button" className={styles.root}>
      test
    </button>
  );
};
