import React from 'react';
import styles from './index.module.scss';

export const YourMarkCard = ({title, description}) => {
  const [frsBtn, setFrtBtn] = React.useState(0) 
  const [comment, setComment] = React.useState("") 
  
  const onBtnClick = (el) => {
    setFrtBtn(el)
    localStorage.setItem('title', frsBtn)
    localStorage.setItem("comment", )
  }

  return (
    <>
        <div className="yourtestcontainer">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="divforCard">
        <span>ужасно</span>
        <ul>
          {Array.from([1, 2, 3, 4, 5], (el, i) => {
            return (
              <button type="button" onClick={() => onBtnClick(el)} className="btn test_cust" key={i}>
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
          placeholder="Оставьте комментарий..."
          onChange={(e) => localStorage.setItem("comment", e.target.value)}
          ></textarea>
      </div>
    </div>
    </>
  );
};
