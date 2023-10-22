import React from 'react';
import styles from './index.module.scss';
import arrowright from '../../../img/images 1.png';
import arrowleft from '../../../img/images 1-2.png';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

export const CardForFeedback = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate('/feedback')} type="button" className="super-but">
      test
    </button>
  );
};
