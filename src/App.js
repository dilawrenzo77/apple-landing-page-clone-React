import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from 'react-router';

const App = () => {
  return (
    <div className='App'>
      <div className="container">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
