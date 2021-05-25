import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import AllStudent from '../AllStudent/AllStudent';
import ManageProjects from '../ManageProjects/ManageProjects';
import './TeacherAction.css';

const TeacherAction = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let {designation} = useParams();
    const [selectedOption, setSelectedOption] = useState("manage-project")

    useEffect(()=>{
        fetch(`http://localhost:4000/isATeacher?email=${loggedInUser.email}&designation=${designation}`)
        .then( res => res.json())
        .then( data => {
            if(data.length === 0){
                alert("Hey !! You are not a Teacher")
                window.location.reload(false);
            }
        })

    },[])


    return (
        <div className="teacher-container">
            <div className="teacher-sidebar">
            <h6>{loggedInUser.name}</h6>
                <ul>
                    <li  onClick={()=> setSelectedOption("manage-project")}>Manage projects</li>
                    <li  onClick={()=> setSelectedOption("view-students")}>All students</li>
                </ul>
            </div>
            <div className="teacher-action-container">
            {selectedOption === "manage-project" && <ManageProjects></ManageProjects>}
            {selectedOption === "view-students" && <AllStudent></AllStudent>}

            </div>
            
        </div>
    );
};

export default TeacherAction;