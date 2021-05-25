import React, { useEffect, useState } from 'react';

const AllStudent = () => {
    const [studentsInfo, setStudentsInfo] = useState([])
    useEffect(()=>{
        fetch(`https://quiet-peak-36784.herokuapp.com/viewStudents`)
        .then(res => res.json())
        .then(data => setStudentsInfo(data))
    },[])
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col"> Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Gender</th>

                    </tr>
                </thead>
                <tbody>
                    {studentsInfo.map(member =>{
                        if(member.id < 1441){
                            return (
                                <tr>
                                    <td>{member.id}</td>
                                    <td>{member.name}</td>
                                    <td>{member.email}</td>
                                    <td>{member.gender}</td>
                                </tr>)
                        }

                    })}
                    
                </tbody>
            </table>
        </div>
    );
};

export default AllStudent;