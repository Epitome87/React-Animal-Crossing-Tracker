import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import BugScreen from './screens/Bug/BugScreen';
import FishScreen from './screens/Fish/FishScreen';
import NotFoundScreen from './screens/NotFound/NotFoundScreen';
import FishDetailScreen from './screens/Fish/FishDetailScreen';
import FossilScreen from './screens/Fossil/FossilScreen';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/bug' element={<BugScreen /> } />
        <Route path ='/bug/:bugId' element={<h1>Bug Details</h1>} />
        <Route path='/fish' element={<FishScreen />} />
        <Route path='/fish/:fishId' element={<FishDetailScreen /> } />
        <Route path='/fossil' element={<FossilScreen /> } />
        <Route path='/fossil/:fossilId' element={<h1>Fossil Details</h1>} />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </div>
  );
}

export default App;