import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import IndividualStudent from './IndividualStudent'

class StudentList extends Component {
    componentDidMount() {
        console.log(this.props.students)
    }
    render () {
        return (
            <div className='Student-List-Wrapper'>
            <h1>
                This is my Student List
                
            </h1>
                <div className='Student-List-Individual-Wrapper'>
                {this.props.students.map(studentBeingExamined =>{
                    return (
                        <IndividualStudent student = {studentBeingExamined}/>
                    )
                })}
                </div>
            
            
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        students: state.studentListReducer.students,
        error: state.studentListReducer.error
    }
}

export default connect(mapStateToProps)(StudentList)


