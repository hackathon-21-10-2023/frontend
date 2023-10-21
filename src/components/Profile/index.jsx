import React from 'react';
import styles from './index.module.scss';
import fstAvatar from '../../img/Ellipse 1-2.png';
import secAvatar from '../../img/Ellipse 1.png';

export const Profile = () => {
  const email = 'ivan@greensight.ru';
  const role = 'Ведущий сотрудник';
  const fullName = 'Иван Иванов';
  return (
    <div className={styles.root}>
      <h2>профиль</h2>
      <div className={styles.root__descprofile}>
        <div className={styles.root__descprofile__profile}>
          {role.includes('руководитель') ? (
            <img src={fstAvatar} width={80} className={styles.root__img} alt="profile photo" />
          ) : (
            <img src={secAvatar} width={80} alt="profile photo" />
          )}
        </div>
        <div className={styles.root__descprofile_desc}>
          <ul className={styles.root__descprofile_desc__container}>
            <li className={styles.root__descprofile_desc__container__full}>{fullName}</li>
            <li className={styles.root__descprofile_desc__container__role}>{role}</li>
            <li className={styles.root__descprofile_desc__container__email}>
              <a href={'mailto:'.concat(email)}>{email}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
