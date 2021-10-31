import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const Register = () =>{
    const [ name, setName ] = useState( "" );
    const [ email, setEmail ] = useState( "" );
    const [ password, setPassword ] = useState( "" );
    const [ passwordConfirm, setPasswordConfirm ] = useState( "" );
    const [ message, setMessage ] = useState( "" );
    const history = useHistory();
    const handleRegister = e =>{
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            password_confirm: passwordConfirm
        };
        axios.post( 'register', data ).then(
            () =>{history.push( '/login' );}
        ).catch(
            error =>{ setMessage( error.response.data.message ); }
        )
    }

    let error = message ? <div className="alert alert-danger" role="alert"> { message } </div> : "";
    return (
        <form onSubmit={ handleRegister }>
            { error }
            <h3>Sign Up</h3>
            <div className="form-group">
                <label>Name:</label>
                <input type="text" value={ name } className="form-control" placeholder="You name?"
                    onChange={ e => setName( e.target.value ) } />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input type="email" value={ email } className="form-control" placeholder="Your email?"
                    onChange={ e => setEmail( e.target.value ) } />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input type="Password" value={ password } className="form-control" placeholder="Your password?"
                    onChange={ e => setPassword( e.target.value ) } />
            </div>
            <div className="form-group">
                <label>Confirm Password:</label>
                <input type="Password" value={ passwordConfirm } className="form-control" placeholder="Confirm your password?"
                    onChange={ e => setPasswordConfirm( e.target.value ) } />
            </div>
            <div className="form-group">
                <button className="btn btn-info btn-block form-control mt-3">Register</button>
            </div>
            <div className="text-center mt-2">
                Already registered? <Link to={ '/login' }>login</Link>
            </div>
        </form>
    );
}
export default Register;