import * as React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './modules/views/Home';
import withRoot from './modules/withRoot';
import NotFoundPage from './NotFoundPage';
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Terms from './Terms';
import Privacy from './Privacy';

function Index() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />}/>
        <Route path='/' element={<Home />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/reset-pass" element={<ForgotPassword/>} />
        <Route path="/terms" element={<Terms />}/>
        <Route path="/privacy" element={<Privacy />}/>
      </Routes>
    </>
  );
}

export default withRoot(Index);
