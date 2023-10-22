import React from 'react';
import { Header } from '../components/Header';
import { ProfileDesc } from '../components/ProfileDesc';
import { Subvision } from '../components/Subvision';
import { YourMarks } from '../components/YourMarks';
import { Link } from 'react-router-dom';
import axios from 'axios';
export const Profile = () => {

  const [position, setPosition] = React.useState("")
  const [user, setUser] = React.useState([])
  const [slaves, setSlaves] = React.useState([])

  React.useEffect(() => {
    const pos = localStorage.getItem("position")
    setPosition(pos)
    const jwt = localStorage.getItem('jwt');
    const token = 'Bearer ' + jwt.replace('"', '').replace('"', '');
    const id = localStorage.getItem('id');
    if (pos.includes("Руководитель")) {
      axios.get(`https://hackathon-21-10-2023.adoge.ru/api/v1/list_slaves_of_head/${id}/`, {
        headers: {
          Authorization: token,
        },
      }).then(function (response) {
        setSlaves(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    axios.get(`https://hackathon-21-10-2023.adoge.ru/api/v1/get_me/`, {
        headers: {
          Authorization: token,
        },
      }).then(function (response) {
        console.log(response.data)
        setUser(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

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
  return (
    <>
      <div>
        <Header />
        <div className="feedback_container">
          <div className="profile_info_container">
            <ProfileDesc {...user} />
            <Subvision />
          </div>
          <YourMarks dataForFeedback={dataForFeedback} dataForYourMarks={dataForYourMarks} />
        </div>
      </div>
      {position.includes('Руководитель') ? (
        <div className="slaves_container custom_container">
          <Link to="/workers" className="link">
            список подчиненных
          </Link>
          {slaves.length !== 0 ? (
            <div className="redbox">
              <span>{slaves.length}</span>
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
