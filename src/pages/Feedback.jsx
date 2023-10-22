import React from 'react';

import { Header } from '../components/Header';
import { YourMarkCard } from '../components/Cards/YourMarkCard';

export const Feedback = () => {
  const dataForFeedback = [
    {
      id: 3,
      username: 'kkkk@afs.com',
      name: 'Кирилл',
      surname: 'Куликов',
      email: 'kkkk@afs.com',
      position: 'Джун',
      photo: 'http://127.0.0.1:8000/static/photos/person1.jpeg',
      is_intern: false,
      is_head: false,
      is_awaiting_feedback: false,
      department: 1,
      feedback_viewed: null,
    },
    {
      id: 4,
      username: 'mmm@aadg.com',
      name: 'Максим',
      surname: 'Окулов',
      email: 'mmm@aadg.com',
      position: 'Мидл+',
      photo: 'http://127.0.0.1:8000/static/photos/person2.jpeg',
      is_intern: false,
      is_head: false,
      is_awaiting_feedback: false,
      department: 1,
      feedback_viewed: null,
    },
  ];
  return (
    <div>
      <Header />
      <h2 className="yourtesth2">ваша оценка сотрудника</h2>
      <div>
        {dataForFeedback.map((el, i) => {
          return <YourMarkCard key={i} {...el} />;
        })}
        <button type="button" className="btn btn_cust">
          Отправить
        </button>
      </div>
    </div>
  );
};
