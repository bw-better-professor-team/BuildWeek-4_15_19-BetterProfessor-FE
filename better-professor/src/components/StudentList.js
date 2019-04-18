import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import IndividualStudent from './IndividualStudent';
import requiresAuth from '../auth/requiresAuth';
import {studentDataGrab} from '../actions';

class StudentList extends Component {
    state = {
        new_student: {
            name: '',
            projects: '',
            date: '',
            id: ''
        }
    };
    componentDidMount(){
        this.props.studentDataGrab()
    }
    handleChange = e => {
        this.setState({
            new_student: {
                ...this.state.new_student,
                [e.target.name]: e.target.value
            }
        })
    };

    submitStudent = e => {
        e.preventDefault();
        this.props.new_student(this.state.new_student);
    }

    render () {
        return (
            <div className='Student-List-Wrapper'>
                    <h1 className='Student-List-Title'>
                        Your Student List
                        
                    </h1>
                    <div className='Student-List-Header'>

                    <h3>
                        Add a Student Here:
                        <form className= 'Student-List-Form' onSubmit={this.submitStudent}>
                            {/* <label for="name>">Name</label> */}
                            <input 
                                type="text"
                                name='name'
                                placeholder="Name"
                                value={this.state.new_student.name}
                                onChange={this.handleChange}
                            
                            />

                            {/* <label for="projects>">Password</label> */}
                            <input 
                                type="text"
                                name='projects'
                                placeholder="Project"
                                value={this.state.new_student.projects}
                                onChange={this.handleChange}
                            />
                            <input 
                                type="text"
                                name='date'
                                placeholder="Due Date"
                                value={this.state.new_student.date}
                                onChange={this.handleChange}
                            />
                            <button className='Student-List-Button'>
                                {this.props.addingStudent ? (
                                    // <Loader type="ThreeDots" colors='#1f2a38' height='12' width='12'/>
                                    'Adding...'
                                ) : (
                                    'Submit Student'
                                )}
                                
                            </button>
                        </form>
                    </h3>
                </div>
                <div className='Student-List-Individual-Wrapper'>
                    
                    {this.props.students.map((studentBeingExamined, arrayNumber) =>{
                        return (
                            <IndividualStudent student = {studentBeingExamined} key = {studentBeingExamined.student_id} arrayNumber={arrayNumber}
                            firstName = {studentBeingExamined.firstname} />
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
        addingStudent: state.studentListReducer.addingStudent,
        error: state.studentListReducer.error
    }
}

export default connect(mapStateToProps, { studentDataGrab })(requiresAuth(StudentList))