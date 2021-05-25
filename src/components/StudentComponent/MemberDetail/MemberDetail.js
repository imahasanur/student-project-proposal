import React from 'react';

const MemberDetail = ({groupMembers}) => {
    return (
        <div>
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
                    {groupMembers.map(member =>{
                        return (<tr>
                            <td>{member.name}</td>
                            <td>{member.email}</td>
                            <td>{member.title}</td>
                            <td>{member.description}</td>
                            <td>{member.status}</td>
                            </tr>)
                    })}
                    
                </tbody>
            </table>
            
        </div>
    );
};

export default MemberDetail;