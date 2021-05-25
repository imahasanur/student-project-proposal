import React from 'react';
import './Instructors.css';
import instructors from '../../../fakeData/instructorsData.jsx';
import InstructorDetail from '../InstructorDetail/InstructorDetail';

const Instructors = () => {
    return (
        <div className="p-2">
            <h2 className="text-center p-3">Our Instructors</h2>
            <div className="row container-fluid gx-5">
                {instructors.map(instructor => <InstructorDetail instructor={instructor} key={instructor.id}></InstructorDetail>)}
            </div>
        </div>

    );
};

export default Instructors;