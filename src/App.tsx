import './App.css';

import React from 'react';
import { GiftsView } from './views/GiftsView';
import { TestView } from './views/TestView';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NotFoundView } from './views/NotFoundView';
import { SingleGiftView } from './views/SilgleGiftView';
import { ChildView } from './views/ChildView';
import { HomeView } from './views/HomeView';


export default function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/gift" element={<GiftsView />} />
        <Route path="/gift/:idOfGift" element={<SingleGiftView />} />
        <Route path="/child" element={<ChildView />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </div>
  );
}
