import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import FishScreen from './screens/FishScreen';
import NotFoundScreen from './screens/NotFoundScreen';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/fish' element={<FishScreen />} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;
