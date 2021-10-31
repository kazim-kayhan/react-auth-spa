import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Login = ( {setLoggedInUser } ) =>
{
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ message, setMessage ] = useState( "" );
    const history = useHistory();
    const handleLogin = ( e ) =>{
        e.preventDefault();
        const data = {
            email: email,
            password: password
        };
        axios.post( 'login', data ).then(
            response =>{
                localStorage.setItem( 'token', response.data.token );
                setLoggedInUser( response.data.user );
                history.push('/');
            }
        ).catch(
            error =>{ setMessage( error.response.data.message ); }
        )
    }

    let error = message ? <div className="alert alert-danger" role="alert"> { message } </div> : "";
    return (
        <form onSubmit={ handleLogin }>
            { error }
            <h3>Login</h3>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={ email } className="form-control" placeholder="Enter you email."
                    onChange={ e => setEmail( e.target.value ) } />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="Password" value={ password } className="form-control" placeholder="Type your password."
                    onChange={ e => setPassword( e.target.value ) } />
            </div>
            <div className="form-group">
                <button className="btn btn-info btn-block form-control mt-3">Login</button>
            </div>
            <div className="text-center mt-2 d-flex justify-content-around">
                Not registered?<Link to={ '/register' }>Register.</Link>
            </div>
        </form>
    );
}
export default Login;