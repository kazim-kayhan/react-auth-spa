import React from 'react'
import { Link } from "react-router-dom";

const Home = ( { user } ) =>{
    if ( user ){
        return (
            <h3>Hello { user.name }! <br /> You are logged in. </h3>
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
    );
}
export default Home;