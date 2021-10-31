import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';

function App (){
  const [user, setUser] = useState("");
  const setLoggedInUser =(user)=>{
    setUser(user);
  }
  return (
    <Router>
      <div className="App">
        <Navbar user={ user } setUser={setLoggedInUser} />
        <div className='auth-wrapper d-flex flex-column justify-content-center text-start' >
          <div className='auth-inner bg-white m-auto'>
            <Switch>
              <Route exact path='/' component={ () => <Home user={ user } /> } />
              <Route path='/login' component={ () => <Login setLoggedInUser={setLoggedInUser} /> } />
              <Route path='/register' component={ Register } />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;