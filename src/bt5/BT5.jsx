import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../bt4/components/Header';

function BT4({ children }) {
  return (
    <div className='page'>
      <Header />
      <Outlet />
    </div>
  );
}

export default BT4;
