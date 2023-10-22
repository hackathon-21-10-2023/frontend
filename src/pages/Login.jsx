import React from 'react';
import { Form } from '../components/Form';
import { Header } from '../components/Header';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      navigate('/profile');
    }
  }, []);
  return (
    <div className="login_container">
      <Header />
      <Form />
    </div>
  );
};
