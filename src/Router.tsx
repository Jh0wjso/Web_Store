import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './page/main';

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Main />} />
    </Routes>
  );
}
