import React from 'react';
import { Header } from '../components/Header';
import { Profile } from '../components/Profile';
import { Subvision } from '../components/Subvision';
import { YourMarks } from '../components/YourMarks';
import { Link } from 'react-router-dom';

export const Feedback = () => {
  const data = {
    id: 1,
    test1: 'руководитель',
    test2: 'нет',
  };

  const dataForYourMarks = [
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
      date: '12.10.2003',
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
      date: '12.10.2003',
    },
  ];

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

  const listOfEmpl = [
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
    <>
      <div>
        <Header />
        <div className="feedback_container">
          <div className="profile_info_container">
            <Profile />
            <Subvision />
          </div>
          <YourMarks dataForFeedback={dataForFeedback} dataForYourMarks={dataForYourMarks} />
        </div>
      </div>
      {data.test1.includes('руководитель') ? (
        <div className="slaves_container">
          <Link to="/workers" className="link">
            список подчиненных
          </Link>
          {listOfEmpl.length !== 0 ? (
            <div className="redbox">
              <span>{listOfEmpl.length}</span>
            </div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
    </>
  );
};
