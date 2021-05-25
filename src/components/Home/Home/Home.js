import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Header from '../Header/Header';
import Instructors from '../Instructors/Instructors';
import PrevProject from '../PrevProject/PrevProject';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <PrevProject></PrevProject>
            <Instructors></Instructors>
            <Footer></Footer>
        </div>
    );
};

export default Home;