import React from 'react';
import styles from './index.module.scss';
import { CardForFeedback } from '../Cards/CardForFeedback';
import { CardForYourMarks } from '../Cards/CardForYourMarks';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const YourMarks = (num) => {
  const dataForFeedback = num.dataForFeedback;
  const dataForYourMarks = num.dataForYourMarks;

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  return (
    <div className={styles.root}>
      <h2>ваши оценки</h2>
      <div className={styles.root__yourmarks}>
        <div className="slaves_container">
          <p>вы оцениваете</p>
          <div className="redbox">
            <span>{dataForFeedback.length}</span>
          </div>
        </div>
        <ul>
          {dataForFeedback.length !== 0 ? (
            <div>
              <div className="datafor_container">
                <Carousel infinite={true} responsive={responsive}>
                  {dataForFeedback.map((el, i) => {
                    return <CardForFeedback key={i} {...el} />;
                  })}
                </Carousel>
              </div>
            </div>
          ) : (
            <li>У вас пока запросов обратной связи</li>
          )}
        </ul>
      </div>
      <div className={styles.root__yourfeedback}>
        <div className="slaves_container">
          <p>вас оценили</p>
          <div className="greenbox">
            <span>{dataForYourMarks.length}</span>
          </div>
        </div>
        <ul>
          {dataForYourMarks.length !== 0 ? (
            <div>
              <div className="datafor_container">
                <Carousel infinite={true} responsive={responsive}>
                  {dataForYourMarks.map((_, i) => {
                    return <CardForYourMarks key={i} />;
                  })}
                </Carousel>
              </div>
            </div>
          ) : (
            <li>У вас пока нет обратной связи</li>
          )}
        </ul>
        <button type="button" className="btn">
          Запросить
        </button>
      </div>
    </div>
  );
};
