import React from "react";
import { Link } from "react-router-dom";

export default class HomeComponent extends React.Component
{
    render ()
    {
        if ( this.props.user )
        {
            return (
                <h3>Hello { this.props.user.name }? <br/> You have successfully logged in. </h3>
            )
        }
        return (
            <div>
                <h3>You are not logged in yet.</h3>
                <div className="text-center mt-2 d-flex justify-content-around">
                    <Link to={ '/login' }>Login</Link> Or
                    <Link to={ '/register' }>Register.</Link>
                </div>
            </div>
        )
    }
}