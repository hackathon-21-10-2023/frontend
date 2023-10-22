import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import avatar from '../../img/Ellipse 5.png';
import { useNavigate } from 'react-router-dom';

export const WorkersDesc = () => {
  const navigate = useNavigate();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  return (
    <div className="workersdesc_container">
      <div className="img_container">
        <img width={70} src={avatar} alt="avatar" />
        <span>Маша Маша</span>
      </div>
      <button type="button" className="btn btn_cust">
        Запросить
      </button>
      <Carousel infinite={true} responsive={responsive} className="cust_car">
        <button onClick={() => navigate('/result')} type="button" className="super-but testtest">
          Обратная связь от 12.08.23
        </button>
      </Carousel>
    </div>
  );
};
