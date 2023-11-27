import './App.css';

import React from 'react';
import { GiftsView } from './views/GiftsView';
import { TestView } from './views/TestView';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NotFoundView } from './views/NotFoundView';

export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/test" element={<TestView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}
