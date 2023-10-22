import React from 'react';

export const CardForResult = () => {
  return (
    <div className="res_container">
      <div className="ghghg_container">
        <span className="ghghg"></span>
        <h4>отзыв от Петр Андреев</h4>
      </div>
      <div>
        <h4>участие в рабочих задачах</h4>
        <p>
          Сотрудник был мотивирован, но не всегда выполнял задачи корректно из-за плохой
          коммуникации
        </p>
      </div>
      <div>
        <h4>участие в корпоративной жизни компании</h4>
        <p>Сотрудник не предлагал ничего нового, а просто плыл по течению</p>
      </div>
      <div className="testfor">
        <div>
          <h4>эмоциональная окраска</h4>
          <p>отрицательная</p>
        </div>
        <div>
          <h4>оценка</h4>
          <h4>3</h4>
          <span>удовлетворительно</span>
        </div>
      </div>
    </div>
  );
};
