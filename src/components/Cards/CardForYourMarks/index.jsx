import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

export const CardForYourMarks = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/result')} type="button" className="super-but">
      test
    </button>
  );
};
