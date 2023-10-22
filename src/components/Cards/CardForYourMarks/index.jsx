import React from 'react';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';

export const CardForYourMarks = ({created_at}) => {
  const date = created_at.split("T")[0]
  console.log(date)
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/result')} type="button" className="super-but">
            Обратная связь от {date}
    </button>
  );
};
