import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App';
import Settings from './pages/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Control from './utils/Control';
import Login from './pages/Login';

const router =
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Control component={<App/>}/>} />
      <Route path='/settings' element={<Control component={<Settings/>}/>} />
    </Routes>
  </BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);

