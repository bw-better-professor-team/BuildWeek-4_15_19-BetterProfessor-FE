import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

class IndividualStudent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {

    //     }
    // }

    render () {
        return (
            <div className='Individual-Student-Wrapper'>
            
            
            <h2>This is an individual student</h2>
            <h4>{this.props.student.name}</h4>
            <h5>{this.props.student.projects}</h5>
            <h5>{this.props.student.date}</h5>
            <button>
            This Button will be to Select the student

            </button>
            <button>
            This Button will be to Send a Message

            </button>
            
            
            </div>
        )
    }
}



export default IndividualStudent