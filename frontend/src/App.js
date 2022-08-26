import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/errors/Error404';

import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import Activate from './pages/auth/Activate';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path='*' element={<Error404/>}/>
          <Route exact path='/' element={<Home/>}/>

          {/* Authentication  */}
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
        
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
