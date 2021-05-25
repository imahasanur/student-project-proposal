import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link class="navbar-brand" href="#">Student <small>Project Proposal</small></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ml-auto">
                        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        <Link class="nav-link active" aria-current="page" to="/home">About</Link>
                        <Link class="nav-link active" aria-current="page" to="/home">Contact Us</Link>
                       
                        <Link class="nav-link btn " to="/teachers/teacher">Teacher LogIn</Link>
                        <Link class="nav-link btn " to="/students/student">Student LogIn</Link>
                    </div>
                </div>
            </div>
        </nav>
            
      </div>
    );
};

export default Navbar;