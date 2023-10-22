import React from 'react'

import { Header } from '../components/Header';
import { YourMarkCard } from '../components/Cards/YourMarkCard';

import axios from 'axios';

export const Feedback = () => {
  const [questions, setQuestions] = React.useState([])


  React.useEffect(() => {

    const jwt = localStorage.getItem('jwt');
    const token = 'Bearer ' + jwt.replace('"', '').replace('"', '');
    axios.get(`https://hackathon-21-10-2023.adoge.ru/api/v1/metric/list/`, {
      headers: {
        Authorization: token,
      },
    }).then(function (response) {
      setQuestions(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  } ,[])

  const onPostClick = () => {
    const answ = localStorage.getItem("getAnsw")
    const jwt = localStorage.getItem('jwt');
    const comment = localStorage.getItem('comment')
    const token = 'Bearer ' + jwt.replace('"', '').replace('"', '');
    axios.post(`https://hackathon-21-10-2023.adoge.ru/api/v1/feedback_create/`,{
      "feedback_items": [
        {
          "metric_id": 3,
          "text": comment,
          "score": answ
        }
      ],
      "to_user_id": 6
    }, {
      headers: {
        Authorization: token,
      },
    })
  }

  return (
    <div>
      <Header />
      <h2 className="yourtesth2">ваша оценка сотрудника</h2>
      <div>
        {questions.map((el, i) => {
          return <YourMarkCard key={i} {...el} />;
        })}
        <button onClick={() => onPostClick()} type="button" className="btn btn_cust">
          Отправить
        </button>
      </div>
    </div>
  );
};
