import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';

export function Router() {
  return (
    <Routes>
        <Route path='/' element={<App />} />
    </Routes>
  );
}
