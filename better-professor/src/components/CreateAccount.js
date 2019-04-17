import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import axios from 'axios';
import { accountCreation } from '../actions'
import { Route, Link } from 'react-router-dom';


class CreateAccount extends Component {
    state = {
        new_credentials: {
            username: '',
            password: '',
        }
    };

    handleChange = e => {
        this.setState({
            new_credentials: {
                ...this.state.new_credentials,
                [e.target.name]: e.target.value
            }
        })
    };

    accountCreation = e => {
        e.preventDefault();
        // axios.post('https://betterprofessor.herokuapp.com/api/register', this.state.new_credentials)
        this.props.accountCreation(this.state.new_credentials);

        // console.log(this.props.loggingIn)
    }


    render() {
        return(
            <div className='Login-Form'>
                <form onSubmit={this.accountCreation}>
                    <label for="username>">Account</label>
                    <input 
                        type="text"
                        name='username'
                        placeholder="Username"
                        value={this.state.new_credentials.username}
                        onChange={this.handleChange}
                    
                    />

                    <label for="username>">Password</label>
                    <input 
                        type="password"
                        name='password'
                        placeholder=" "
                        value={this.state.new_credentials.password}
                        onChange={this.handleChange}
                    
                    />
                    <div className="Login-Error-Spacer" />
                    {this.props.error && <p className='Error'>{this.props.error}</p>}

                    <button>
                        {this.props.creatingAccount ? (
                            // <Loader type="ThreeDots" colors='#1f2a38' height='12' width='12'/>
                            'Loading...'
                        ) : (
                            'Create Account'
                        )}
                        
                    </button>

                    <Link to="login">Back to Login</Link>

                
                </form>
            
            </div>
        )

    }

}

const mapStateToProps = (state) => {
    return{
        error: state.loginReducer.loginError,
        loggingIn: state.loginReducer.loggingIn,
        creatingAccount: state.loginReducer.creatingAccount,
    }
}

export default connect(
    mapStateToProps,
    { accountCreation }
)(CreateAccount)