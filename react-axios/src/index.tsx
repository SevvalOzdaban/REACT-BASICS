import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';

const router =
  <BrowserRouter>
  {/* Alert gibi her yerde kullanılacak yapıları indexte çağırmalıyız.
      Böylece her yerde aynı componenti çağırmayız ve import etmeyiz.  */}
    <ToastContainer />
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(router);

