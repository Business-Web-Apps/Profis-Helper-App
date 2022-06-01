import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
// @ts-ignore
import App from './App';
import NotFoundPage from './NotFoundPage';
import reportWebVitals from './reportWebVitals';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Terms from './Terms';
import Privacy from './Privacy';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path="/" element={<App />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/reset-pass" element={<ForgotPassword/>} />
        <Route path="/terms" element={<Terms />}/>
        <Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
