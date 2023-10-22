import React from 'react';
import styles from './index.module.scss';

export const YourMarkCard = () => {
  return (
    <div className="yourtestcontainer">
      <div>
        <h3>участие в рабочих задачах</h3>
        <p>Оцените качество выполнения сотрудником поставленных целей и задач </p>
      </div>
      <div className="divforCard">
        <span>ужасно</span>
        <ul>
          {Array.from([1, 2, 3, 4, 5], (el, i) => {
            return (
              <button type="button" className="btn test_cust" key={i}>
                {el}
              </button>
            );
          })}
        </ul>
        <span>отлично</span>
      </div>
      <div>
        <textarea
          name="leave comment"
          cols="30"
          rows="10"
          placeholder="Оставьте комментарий..."></textarea>
      </div>
    </div>
  );
};
