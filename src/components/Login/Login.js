import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import './Login.css';
import { useForm } from "react-hook-form";
import firebaseConfig from './firebase.config';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { useParams } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); 
 }

const Login = () => {

    const [loggedInUser , setLoggedInUser] = useContext(UserContext);
    const [isRegistered, setIsRegistered] = useState(false)
    const [userInfo, setUserInfo] = useState({})

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    useEffect(()=>{
        console.log("user Info", userInfo);
        if(userInfo.email){
            fetch(`http://localhost:4000/addUserInfo`, {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(data =>{
                if(data){
                    console.log("Data inserted to database", data);
                }
            })
        }
        

    },[userInfo])
    
    const createUser = (email, password, data)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
        // Signed in 
            var user = userCredential.user;
            console.log("After creating user", user)
            alert("Successfully registered")
            const newUser = data;
            setUserInfo(newUser);
            updateInfo(data.name);
            setIsRegistered(true);
        // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("error create user for", errorCode, errorMessage);
            alert(`${errorMessage}`);
        });

    }

    const signIn = (email, password) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("After sing in with ,", user)
            alert("Successfully signed in")
            const newUser = {name:user.displayName, email:user.email};
            setLoggedInUser(newUser);
            setIsRegistered(false);
            history.replace(from);
                // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("Error sign in for ", errorCode, errorMessage);
        });
    }
    const updateInfo = (name) => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: name
        }).then((res)=> {
            console.log("updated ", res)
        }).catch((error)=> {
            console.log("error happened", error);
        });
    }
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        console.log(data);
        if(isRegistered){
            signIn(data.email, data.password)
        }
        else{
            createUser(data.email, data.password, data)
        }

    } 
    return (
        <div className="row container-fluid">
            <div className="col-12 col-sm-10 col-md-10 d-flex justify-content-center align-items-center">
                <div className="login d-flex justify-content-center p-2">
                    <div>  
                        <h2 style={{color:'whitesmoke'}} className="p-2">{isRegistered?"Log In Form":"Registration Form"}</h2>      
                        <form onSubmit={handleSubmit(onSubmit)}>
                            
                            {!isRegistered && <div> <input {...register("name")} placeholder="Your name .." required className="m-1" /> </div>} 
                            {isRegistered === false && <div> <input type="number" {...register("id", { min: 1400, max: 1450 })} placeholder="your id ..(1400-1450)" required className="m-1" /> </div>}
                  
                            {!isRegistered && <div> <select {...register("gender")} className="m-1" >
                                <option value="male">male</option>
                                <option value="female">female</option>
                            </select> </div>} 
                            
                            {!isRegistered && <div><select {...register("designation")} className="m-1" >
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select> </div>}
                            <div>  <input type="email" {...register("email")} placeholder="your email.." required className="m-1" /> </div>
                            <div>  <input type="password" {...register("password")} placeholder="password at least 6 character" required className="m-1" /> </div>
                            <input type="submit" value={isRegistered?"Log In" : "Sign Up"} className="m-1" />
                        </form>
                        {isRegistered ?<h6 onClick = {()=>setIsRegistered(!isRegistered)} className="text-white"> Don't have an account , <span style={{textDecoration:'underline', cursor: 'pointer'}}>Create a User </span></h6>: <h6 onClick = {()=>setIsRegistered(!isRegistered)} className="text-white">Have an Account, <span style={{textDecoration:'underline', cursor: 'pointer'}} >Log In</span></h6>}

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Login;