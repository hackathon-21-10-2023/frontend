import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/app.scss';
import { Feedback } from './pages/Feedback';
import { Login } from './pages/Login';
import { Profile } from './pages/Profile';
import { Result } from './pages/Result';
import { Workers } from './pages/Workers';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/result" element={<Result />} />
          <Route path="/workers" element={<Workers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
