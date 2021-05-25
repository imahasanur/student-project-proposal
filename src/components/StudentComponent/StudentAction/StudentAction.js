import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import ManageGroup from '../ManageGroup/ManageGroup';
import GroupMember from '../GroupMember/GroupMember';
import './StudentAction.css';

const StudentAction = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState("manage-group")
    let {designation} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:4000/isAStudent?email=${loggedInUser.email}&designation=${designation}`)
        .then( res => res.json())
        .then( data => {
            if(data.length === 0){
                console.log("inside");
                alert("Hey !! You are not a student")
                window.location.reload(false);
            }
        })

    },[])

    return (
        <div className="student-container">
            <div className="student-sidebar">
                <h6>{loggedInUser.name}</h6>
                <ul>
                    <li  onClick={()=> setSelectedOption("manage-group")}>Manage group</li>
                    <li  onClick={()=> setSelectedOption("view-member")}>View member</li>
                    {/* <li  onClick={()=> setSelectedOption("view-students")}>All students</li> */}
                </ul>
            </div>
            <div className="student-action-container">
                {selectedOption === "manage-group" && <ManageGroup designation={designation}></ManageGroup>}
                {selectedOption === "view-member" && <GroupMember></GroupMember> }
                {/* {selectedOption === "view-students" &&  } */}

            </div>           
        </div>
    );
};

export default StudentAction;