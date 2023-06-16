import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import { DataContext, data } from './context/DataContext';
import MyContext from './components/MyContext';

const router =
  <Provider store={store}>
    <DataContext.Provider value={data}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/context' element={<MyContext />} />
      </Routes>
    </BrowserRouter>
    </DataContext.Provider>
  </Provider>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);

