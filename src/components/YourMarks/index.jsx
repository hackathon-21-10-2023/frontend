import React from 'react';
import styles from './index.module.scss';
import { CardForFeedback } from '../Cards/CardForFeedback';
import { CardForYourMarks } from '../Cards/CardForYourMarks';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';

export const YourMarks = () => {
  const [needToReviewUsers, setNeedToReview] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
  };

  React.useEffect(() => {
      const jwt = localStorage.getItem('jwt');
      const token = 'Bearer ' + jwt.replace('"', '').replace('"', '');
      console.log(token);
      axios.get(`https://hackathon-21-10-2023.adoge.ru//api/v1/list_need_to_review_users/`, {
        headers: {
          Authorization: token,
        },
      }).then(function (response) {
        console.log(response.data)
        setNeedToReview(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])


  const getAskReviewInfo = () => {
    const jwt = localStorage.getItem('jwt');
    const token = 'Bearer ' + jwt.replace('"', '').replace('"', '');
    const id = localStorage.getItem('id');
    console.log(token);
    axios.get(`https://hackathon-21-10-2023.adoge.ru//api/v1/review/list/for/${id}/`, {
      headers: {
        Authorization: token,
      },
    }).then(function (response) {
      console.log(response.data)
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div className={styles.root}>
      <h2>ваши оценки</h2>
      <div className={styles.root__yourmarks}>
        <div className="slaves_container">
          <p>вы оцениваете</p>
          <div className="redbox">
            <span>{needToReviewUsers.length}</span>
          </div>
        </div>
        <ul>
          {needToReviewUsers.length !== 0 ? (
            <div>
              <div className="datafor_container">
                <Carousel infinite={true} responsive={responsive}>
                  {needToReviewUsers.map((el, i) => {
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
            <span>{users.length}</span>
          </div>
        </div>
        <ul>
          {users.length !== 0 ? (
            <div>
              <div className="datafor_container">
                <Carousel infinite={true} responsive={responsive}>
                  {users.map((obj, i) => {
                    return <CardForYourMarks key={i} {...obj}/>;
                  })}
                </Carousel>
              </div>
            </div>
          ) : (
            <li>У вас пока нет обратной связи</li>
          )}
        </ul>
        <button onClick={() => getAskReviewInfo()} type="button" className="btn">
          Запросить
        </button>
      </div>
    </div>
  );
};
