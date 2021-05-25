import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const ManageGroup = () => {

    const [memberDetail, setMemberDetail] = useState({});
    const [membersInfo, setMembersInfo] = useState([]);
    const [memberAdded, setMemberAdded] = useState(true);
    const [toBeAdded, setToBeAdded] = useState(true);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isMember, setIsMember] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:4000/isAGroupMember?email=${loggedInUser.email}`)
        .then( res => res.json())
        .then( data => {
            if(data.length > 0){
                console.log("Is a group member", data);
                setIsMember(true)
                setMemberDetail(data[0]);
                checkTotalMember(data[0].name);
            }
            else{
                console.log("Not a group member")
            }
        })

    },[isMember]);

    useEffect(()=>{
        fetch(`http://localhost:4000/getAllGroup`)
        .then(res => res.json())
        .then(data => {
            setMembersInfo(data);
            console.log("All groups info", data);
        })

    },[memberAdded]);

    const checkTotalMember= (name) =>{
        fetch(`http://localhost:4000/memberCount?name=${name}`)
        .then( res => res.json())
        .then( data => {
            console.log(name,data, "inside checkTotal");
            if(data.length > 3){
                console.log("Is check member count");
                setToBeAdded(false);
            }
            else{
                console.log("can be added member")
            }
        })
        
    }

    const {register, handleSubmit} = useForm();
    const onSubmit = data =>{
        console.log(data);
        data.status = "pending";
        if(!isMember){
            fetch(`http://localhost:4000/makeAGroup`, {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result =>{
                if(result){
                    setIsMember(true)
                    setMemberAdded(!memberAdded)
                    console.log("Data inserted to database", data);
                    alert("A Member Added successfully");

                }
            })
        }
        else{
            //to add a single member by another group member
            
            const{name, title, description,status}=memberDetail;
            const newMember ={name:name, title:title,description:description, status:status}
            console.log("new Member", newMember);
            newMember.email = data.email;
            checkTotalMember(name)
            const existingMember = membersInfo.find(member => member.email === data.email);
            if(existingMember){
                alert(`Already a member of a group`);
                return 
            }
            
            if(toBeAdded){
                fetch(`http://localhost:4000/addAMember`, {
                    method:'POST',
                    headers:{'Content-Type': 'application/json'},
                    body: JSON.stringify(newMember)
                })
                .then(res => res.json())
                .then(result =>{
                    if(result){
                        console.log("members information", membersInfo)
                        setIsMember(true)
                        setMemberAdded(!memberAdded)
                        checkTotalMember(name)
                        console.log("Data inserted to database with a new member", data);
                        alert("A Member Added successfully");
                    }
                })
            }

        }

    } 


    return (
        <div>
            
            <div className="row container-fluid">
                <div className="col-12 col-sm-10 col-md-10 ">
                    <div >
                        <div>  
                            <h2 className="p-2">{isMember?"Add Member":"Create Group"}</h2>      
                            <form onSubmit={handleSubmit(onSubmit)}>
                                
                                {isMember===false && <div> <input {...register("name")} placeholder="Group name .." required className="m-1" /> </div>}
                                {isMember===false && <div> <input type="text" {...register("title")} placeholder="project title.." required className="m-1" /> </div>}
                                {isMember===false && <div> <input type="text" {...register("description")} placeholder="project description.." required className="m-1" /> </div>}
                                {toBeAdded && <div>  <input type="email" {...register("email")} placeholder={isMember?"student email..":"your email.."} required className="m-1" /> </div>}
                                {toBeAdded && <input type="submit" value={isMember?"Add ":"Make Group"} className="m-1" />}
                            </form>
                            {!toBeAdded && <h2 className="text-danger">Sorry..{memberDetail.name} has already maximum 4 member!!</h2>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageGroup;