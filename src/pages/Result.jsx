import React from 'react';
import { Header } from '../components/Header';
import { CardForResult } from '../components/Cards/CardForResult';

export const Result = () => {
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
      <h2 className="anotherh2">результат оценки сотрудника от 17.08.2023</h2>
      <div>
        {dataForFeedback.map((el, i) => {
          return <CardForResult key={i} {...el} />;
        })}
        <div className="res_container test_res">
          <h4>итоговый отзыв-рекомендация</h4>
          <p className="pp_container">
            Стажер Анна продемонстрировала разнонаправленные качества в рамках своей работы. В сфере
            участия в рабочих задачах, она была мотивированной, но иногда испытывала трудности в
            выполнении задач из-за коммуникативных проблем. Свой вклад в корпоративную жизнь
            компании она вносила в меньшей степени, ограничившись плавным плытьем по течению без
            активных инициатив
          </p>
          <div>
            <h4>итоговая оценка</h4>
            <h4>3</h4>
            <span>удовлетворительно</span>
          </div>
        </div>
      </div>
    </div>
  );
};
