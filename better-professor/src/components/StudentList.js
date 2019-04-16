import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import IndividualStudent from './IndividualStudent'

class StudentList extends Component {
    state = {
        new_student: {
            name: '',
            projects: '',
            date: '',
            id: ''
        }
    };

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
            <h1>
                This is my Student List
                
            </h1>
            <h2>
                Add a Student Here:
                <form onSubmit={this.submitStudent}>
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
                        placeholder="Projects"
                        value={this.state.new_student.projects}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.addingStudent ? (
                            // <Loader type="ThreeDots" colors='#1f2a38' height='12' width='12'/>
                            'Adding...'
                        ) : (
                            'Submit Student'
                        )}
                        
                    </button>
                </form>
            </h2>
            
                <div className='Student-List-Individual-Wrapper'>
                {this.props.students.map(studentBeingExamined =>{
                    return (
                        <IndividualStudent student = {studentBeingExamined} key = {studentBeingExamined.id}/>
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

export default connect(mapStateToProps)(StudentList)


