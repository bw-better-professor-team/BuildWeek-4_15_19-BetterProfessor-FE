import React, { Component } from 'react';
import '../App.css';
import ProjectDetails from './ProjectDetails';

class IndividualStudent extends Component {
    
    state = {
        message: []
    };

    handleChange = e => {
        this.setState({
            
                ...this.state,
                message: e.target.value
            }
        )
    };

    submitMessage = e => {
        e.preventDefault()
        console.log(this.state.message)
        
    }

    changeClassList = e => {

        console.log(this.props.arrayNumber)

        const info = document.querySelectorAll('.Student-Info')
        const buttons = document.querySelectorAll('.Button-Show-Projects')

        const newArray = Array.from(info)
        const buttonArray = Array.from(buttons)

        newArray[this.props.arrayNumber].classList.toggle('Hidden-Display')
        buttonArray[this.props.arrayNumber].classList.toggle('Hidden-Display')
        console.log(buttonArray[this.props.arrayNumber].classList)
        
    }

    render () {
        return (
            <div className='Individual-Student-Wrapper'  >
                
            
                <h3>{this.props.student.firstname} {this.props.student.lastname} </h3>
                <button className="Button-Show-Projects" onClick={this.changeClassList}> Show Projects </button>
                <div className={"Student-Info Hidden-Display"} >


                    <div className='Individual-Project-Wrapper'>
                        <h4 className='Project-List-Title'>
                            Project List
                        </h4>   
                        <h5>
                            {this.props.student.project.map((projectBeingExamined) =>{
                                return (
                                    <ProjectDetails project = {projectBeingExamined} projectName = {projectBeingExamined.project_name}/>
                                )
                            })}
                        </h5>
                    </div >
                    <button className="Button-Hide-Projects" onClick={this.changeClassList}> Hide Projects </button>
                    <div className='Reminder-Button-Wrapper'>
                        <button className="Button-Set-Reminders">
                        Schedule a Reminder for Yourself

                        </button>
                        <button className="Button-Set-Reminders">
                        Schedule a Reminder for the Student
                        </button>
                    </div>
                    <form onSubmit={this.submitMessage}>

                        <div className='Message-Wrapper'>
                            <label htmlFor="message>">Reminder</label>
                            <textarea 
                                rows='4'
                                cols='50'
                                type="text"
                                name='message'
                                placeholder="Type Reminder Here."
                                value={this.state.message}
                                onChange={this.handleChange}
                            
                            />
                        </div>


                        <button>
                            {this.props.creatingReminder ? (
                                // <Loader type="ThreeDots" colors='#1f2a38' height='12' width='12'/>
                                'Creating...'
                            ) : (
                                'Create Reminder'
                            )}
                            
                        </button>
                    </form>
                </div>
                
            </div>
        )
    }
}



export default IndividualStudent