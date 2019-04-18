import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { login } from '../actions'
import axios from 'axios';
import { Route, Link } from 'react-router-dom';


class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    login = e => {
        e.preventDefault();

        this.props.login(this.state.credentials)
        .then( () =>
            this.props.history.push('/student-list')
        )
       
    }


    render() {
        return(
            <div className='Login-Form'>
                <form onSubmit={this.login}>
                <h2>Login Now</h2>

                    <div className='Username-Wrapper'>
                        <label htmlFor="username>">Account</label>
                        <input 
                            className = "Login-Input" 
                            type="text"
                            name='username'
                            placeholder="Username"
                            value={this.state.credentials.username}
                            onChange={this.handleChange}
                        
                        />
                    </div>
                    <div className='Password-Wrapper'>
                        <label htmlFor="password>">Password</label>
                        <input 
                            className = "Login-Input" 
                            type="password"
                            name='password'
                            placeholder="   - "
                            value={this.state.credentials.password}
                            onChange={this.handleChange}
                        
                        />
                    </div>
                    <div className="Login-Error-Spacer" />
                    {this.props.error && <p className='Error'>{this.props.error}</p>}

                    <div className='Login-Button-And-Link'>
                        <button>
                            {this.props.loggingIn ? (
                                // <Loader type="ThreeDots" colors='#1f2a38' height='12' width='12'/>
                                'Loading...'
                            ) : (
                                'Login'
                            )}
                            
                        </button>

                        <Link className= "Link" to="create-account">Create An Account</Link>
                    </div>
                </form>
            
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return{
        error: state.loginReducer.loginError,
        loggingIn: state.loginReducer.loggingIn
    }
}

export default connect(
    mapStateToProps,
    { login }
)(Login)