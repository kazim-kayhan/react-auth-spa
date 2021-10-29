import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class LoginComponent extends React.Component
{
    state = {}
    handleSubmit = e =>
    {
        e.preventDefault();
        const data = {
            email: this.email,
            password: this.password,
        };
        axios.post( 'login', data ).then(
            result =>
            {
                localStorage.setItem( 'token', result.data.token );
                this.setState( {
                    loggedIn: true
                } );
                this.props.setUser( result.data.user );
            }
        ).catch(
            error =>
            {
                this.setState( {
                    message: error.response.data.message
                } )
            }
        )
    }
    render ()
    {
        if ( this.state.loggedIn )
        {
            return <Redirect to='/' />;
        }
        let error = '';
        if ( this.state.message )
        {
            error = (
                <div className="alert alert-danger" role="alert">
                    { this.state.message }
                </div>
            );
        }
        return (
            <form onSubmit={ this.handleSubmit }>
                { error }
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Enter you email."
                        onChange={ e => this.email = e.target.value } />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="Password" className="form-control" placeholder="Type your password."
                        onChange={ e => this.password = e.target.value } />
                </div>
                <div className="form-group">
                    <button className="btn btn-info btn-block form-control mt-3">Login</button>
                </div>
                <div className="text-center mt-2 d-flex justify-content-around">
                    Not registered?<Link to={ '/register' }>Register.</Link>
                </div>
            </form>
        )
    }
}