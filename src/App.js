import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeComponent from './components/Home';
import NavComponent from './components/Navbar';
import RegisterComponent from './components/Register';
import LoginComponent from './components/Login';
export default class App extends React.Component
{
  state = {};
  componentDidMount = () =>
  {
    axios.get( 'user' ).then(
      result =>
      {
        this.setUser( result.data );
      },
      error =>
      {
        console.log( error );
      }
    );
  };
  setUser = user =>
  {
    this.setState( {
      user: user
    } );
  };
  render ()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <NavComponent user={ this.state.user } setUser={ this.setUser } />
          <div className='auth-wrapper d-flex flex-column justify-content-center text-start' >
            <div className='auth-inner bg-white m-auto'>
              <Switch>
                <Route exact path='/' component={ () => <HomeComponent user={ this.state.user } /> } />
                <Route path='/login' component={ () => <LoginComponent setUser={ this.setUser } /> } />
                <Route path='/register' component={ RegisterComponent } />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}