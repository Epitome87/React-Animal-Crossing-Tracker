import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import FishScreen from './screens/Fish/FishScreen';
import NotFoundScreen from './screens/NotFound/NotFoundScreen';
import FishDetailScreen from './screens/Fish/FishDetailScreen';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/fish' element={<FishScreen />} />
        <Route path='/fish/:fishId' element={<FishDetailScreen /> } />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;
