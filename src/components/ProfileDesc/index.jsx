import React from 'react';
import styles from './index.module.scss';
import fstAvatar from '../../img/Ellipse 1-2.png';
import secAvatar from '../../img/Ellipse 1.png';

export const ProfileDesc = ({name, surname, username, position}) => {
  return (
    <div className={styles.root}>
      <h2>профиль</h2>
      <div className={styles.root__descprofile}>
        <div className={styles.root__descprofile__profile}>
            <img src={fstAvatar} width={80} className={styles.root__img} alt="profile" />
        </div>
        <div className={styles.root__descprofile_desc}>
          <ul className={styles.root__descprofile_desc__container}>
            <li className={styles.root__descprofile_desc__container__full}>{surname} {name}</li>
            <li className={styles.root__descprofile_desc__container__role}>{position}</li>
            <li className={styles.root__descprofile_desc__container__email}>
              <a href={'mailto:'.concat(username)}>{username}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
