import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Registration from './components/HomePage/Registration/Registration';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/Register' element={<Registration />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
