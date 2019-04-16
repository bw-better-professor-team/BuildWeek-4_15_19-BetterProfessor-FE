import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { login } from '../actions'
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
        this.props.login(this.state.credentials);
        console.log(this.props.loggingIn)
    }


    render() {
        return(
            <div className='Login-Form'>
                <form onSubmit={this.login}>
                    <label for="username>">Account</label>
                    <input 
                        type="text"
                        name='username'
                        placeholder="Username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    
                    />

                    <label for="username>">Password</label>
                    <input 
                        type="password"
                        name='password'
                        placeholder=" "
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    
                    />
                    <div className="Login-Error-Spacer" />
                    {this.props.error && <p className='Error'>{this.props.error}</p>}

                    <button>
                        {this.props.loggingIn ? (
                            // <Loader type="ThreeDots" colors='#1f2a38' height='12' width='12'/>
                            'Loading...'
                        ) : (
                            'Login'
                        )}
                        
                    </button>

                    <Link to="create-account">Create An Account</Link>
                
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