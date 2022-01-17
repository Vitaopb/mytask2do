import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import App from './App';
import Login from './routes/Login';
import Register from './routes/Register';

const rootElement = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

