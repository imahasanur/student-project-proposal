import React, { useEffect, useState } from 'react';

const ManageProjects = () => {

    const [allGroup, setAllGroup] = useState([]);
    const [memberUpdate, setMemberUpdate] = useState(false);

    useEffect(()=>{
        fetch(`https://quiet-peak-36784.herokuapp.com/getAllGroup`)
        .then(res => res.json())
        .then(data => setAllGroup(data))
    }, [memberUpdate]);

    const handleStatus= (status, id)=>{
        console.log(status, id);
        const newStatus = {status, id};
        console.log(newStatus);
        fetch(`https://quiet-peak-36784.herokuapp.com/updateStatus/${id}`,{
            method:'PATCH',
            headers:{'content-type': 'application/json'},
            body:JSON.stringify(newStatus)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setMemberUpdate(!memberUpdate)
            }
        })
    }

    return (
        <div>
            <h2>Manage Project</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Group</th>
                    <th scope="col">Email</th>
                    <th scope="col">Project Title</th>
                    <th scope="col">Project Description</th>
                    <th scope="col">Status</th>

                    </tr>
                </thead>
                <tbody>
                    {allGroup.map(member =>{
                        return (<tr>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.title}</td>
                            <td>{member.description}</td>
                            <td>
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{member.status}</button>
                                <ul class="dropdown-menu">
                                    <li onClick={()=>handleStatus("pending",member._id)}><a class="dropdown-item" >pending</a></li>
                                    <li onClick={()=>handleStatus("accepted",member._id)}><a class="dropdown-item" >accepted</a></li>
                                </ul>
                            </td>
                            </tr>)
                    })}
                    
                </tbody>
            </table>

        </div>
    );
};

export default ManageProjects;