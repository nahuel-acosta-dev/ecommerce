import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/errors/Error404';

import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Activate from './pages/auth/Activate';
import ResetPassword from './pages/auth/ResetPassword';
import ResetPasswordConfirm from './pages/auth/ResetPasswordConfirm';

import Shop from './pages/Shop';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          {/*es importante que siempre este arriba*/}
          <Route path='*' element={<Error404/>}/>
          <Route exact path='/' element={<Home/>}/>

          {/* Authentication  */}
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
          <Route exact path='/reset_password' element={<ResetPassword/>}/>
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPasswordConfirm/>}/>
          <Route exact path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
