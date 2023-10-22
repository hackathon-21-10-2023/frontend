import React from 'react';
import { Header } from '../components/Header';
import { WorkersDesc } from '../components/WorkersDesc';

export const Workers = () => {
  return (
    <div>
      <Header />
      <h2 className="workers_header">список подчиненных</h2>
      <WorkersDesc />
      <WorkersDesc />
      <WorkersDesc />
      <WorkersDesc />
    </div>
  );
};
