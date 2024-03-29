import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard'
import reportWebVitals from './reportWebVitals';
import UserManagement from './Components/UserManagement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
			<div>
				<Routes>
          
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/usermgmt" element={<UserManagement/>} />
          <Route path="/" exact element={<App/>} />
        </Routes>
        </div>
      </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
