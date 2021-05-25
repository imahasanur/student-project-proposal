import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import MemberDetail from '../MemberDetail/MemberDetail';

const GroupMember = () => {
    const [groupMembers, setGroupMembers] = useState([])
    const[memberInfo, setMemberInfo] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(()=>{
        fetch(`http://localhost:4000/isAGroupMember?email=${loggedInUser.email}`)
        .then( res => res.json())
        .then( data => {
            if(data.length > 0){
                console.log("Is a group member");
                setMemberInfo(data[0]);  
            }
            else{
                console.log("Not a group member")
            }
        })

    },[])

    useEffect(()=>{
        fetch(`http://localhost:4000/searchGroup?name=${memberInfo.name}`)
        .then( res => res.json())
        .then( data => {
            if(data.length > 0){
                console.log("all groups ");
                setGroupMembers(data)
            }
            else{
                console.log("Not a group member")
            }
        })

    },[memberInfo])

    return (
        <div>
            <h2>{memberInfo.name}</h2>
            
            <MemberDetail groupMembers={groupMembers}></MemberDetail>
            

        </div>
    );
};

export default GroupMember;