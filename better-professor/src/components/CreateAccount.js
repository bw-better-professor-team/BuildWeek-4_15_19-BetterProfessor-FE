import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { createAccount } from '../actions'
import { Route, Link } from 'react-router-dom';


class CreateAccount extends Component {
    state = {
        new_credentials: {
            new_username: '',
            new_password: '',
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

    login = e => {
        e.preventDefault();
        // this.props.login(this.state.new_credentials);
        // console.log(this.props.loggingIn)
    }


    render() {
        return(
            <div className='Login-Form'>
                <form onSubmit={this.login}>
                    <label for="username>">Account</label>
                    <input 
                        type="text"
                        name='new_username'
                        placeholder="Username"
                        value={this.state.new_credentials.new_username}
                        onChange={this.handleChange}
                    
                    />

                    <label for="username>">Password</label>
                    <input 
                        type="password"
                        name='new_password'
                        placeholder=" "
                        value={this.state.new_credentials.new_password}
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
)(CreateAccount)