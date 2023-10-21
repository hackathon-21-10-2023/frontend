import React from 'react';
import { Form } from '../components/Form';
import { ReactComponent as Logo } from '../img/logo.svg';

export const Login = () => {
  return (
    <div className="logo_container">
      <div className="header_container">
        <Logo className="logo" />
        <h1 className="header">обратная связь</h1>
      </div>
      <Form />
    </div>
  );
};
