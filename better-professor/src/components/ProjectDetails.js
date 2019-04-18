import React, { Component } from 'react';
import '../App.css';

class ProjectDetails extends Component {
    
    state = {
        message: []
    };

    changeDateFormat = (dateFromArray) => {


    };

    render () {
        return (
            <div className='Project-Item-Wrapper' >
                <li  className='Project-Item-Name'>
                    {this.props.projectName}
                </li>
                <h5 className='Project-Item-Deadline'> 
                    Project Deadline: {this.props.project.project_deadline}
                    
                </h5>
            </div>
        )
    }
}



export default ProjectDetails