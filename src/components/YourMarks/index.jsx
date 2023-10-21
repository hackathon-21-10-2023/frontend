import React from 'react';
import styles from './index.module.scss';
import { Card } from '../Card';
import arrowright from '../../img/images 1.png';
import arrowleft from '../../img/images 1-2.png';
import Slider from 'react-slick';

export const YourMarks = (num) => {
  const dataForFeedback = num.dataForFeedback;
  const dataForYourMarks = num.dataForYourMarks;

  const [arrowRight, setArrowRight] = React.useState(false);
  const [arrowLeft, setArrowLeft] = React.useState(false);
  console.log(arrowRight);

  const onRightArrowClick = () => {
    setArrowRight(!arrowRight);
  };

  const onLeftArrowClick = () => {
    setArrowLeft(!arrowLeft);
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
                {dataForFeedback.map((el, i) => {
                  return <Card key={i} {...el} />;
                })}
              </div>
              <div className="arrow_container">
                <img
                  src={arrowleft}
                  width={7}
                  className={arrowLeft ? '' : 'testing'}
                  alt="arrow"
                  onClick={onLeftArrowClick}
                />
                <img src={arrowright} width={7} alt="arrow" onClick={onRightArrowClick} />
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
            <div className="datafor">
              <div className="datafor_container">
                {dataForYourMarks.map((el, i) => {
                  return <Card key={i} {...el} arrowLeft={arrowLeft} />;
                })}
              </div>
              <div className="arrow_container">
                <img src={arrowleft} width={7} alt="arrow" onClick={onLeftArrowClick} />
                <img src={arrowright} width={7} alt="arrow" onClick={onRightArrowClick} />
              </div>
            </div>
          ) : (
            <li>У вас пока нет обратной связи</li>
          )}
        </ul>
        <button type="button">Запросить</button>
      </div>
    </div>
  );
};
