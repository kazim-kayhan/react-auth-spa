import React from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

export default class RegisterComponent extends React.Component
{
    state = {};
    handleSubmit = e =>
    {
        e.preventDefault();
        const data = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirm: this.confirmPassword
        };
        axios.post( 'register', data ).then(
            result =>
            {
                console.log( result );
                this.setState( {
                    registered: true
                } );
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
        let error = '';
        if ( this.state.message )
        {
            error = (
                <div className="alert alert-danger" role="alert">
                    { this.state.message }
                </div>
            )
        }
        if ( this.state.registered )
        {
            return <Redirect to='/login' />;
        }
        return (
            <form onSubmit={ this.handleSubmit }>
                {error}
                <h3>Sign Up</h3>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" placeholder="You name?"
                        onChange={ e => this.name = e.target.value } />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" placeholder="Your email?"
                        onChange={ e => this.email = e.target.value } />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="Password" className="form-control" placeholder="Your password?"
                        onChange={ e => this.password = e.target.value } />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="Password" className="form-control" placeholder="Confirm your password?"
                        onChange={ e => this.confirmPassword = e.target.value } />
                </div>
                <div className="form-group">
                    <button className="btn btn-info btn-block form-control mt-3">Register</button>
                </div>
                <div className="text-center mt-2">
                    Already registered? <Link to={ '/login' }>login</Link>
                </div>
            </form>
        )
    }
}