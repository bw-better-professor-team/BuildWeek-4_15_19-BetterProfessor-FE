import React, { Component } from 'react';
import '../App.css';

import { Route, Link } from 'react-router-dom';


class Home extends Component {
    


    render() {
        return(
            <div className='Home-Form'>
                <h1>Better Professor App</h1>


                    <div className='Home-Page-Links'>

                        <Link className= "Home-Link" to="login">Login Here!</Link>

                        <h3>Already Logged In? </h3>

                        <Link className= "Home-Link" to="student-list"> See Your Students!</Link>
                    </div>
            
            </div>
        )

    }

}



export default Home