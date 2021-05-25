import React from 'react';

const InstructorDetail = ({instructor}) => {
    const {id, name, designation, comment, img } = instructor;
    return (
        <div className=" offset-1 col-md-3 col-sm-4 col-8 p-2">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    <h6>{designation}</h6>
                    <p class="card-text">{comment}</p>
                    <a href="#" class="btn btn-primary">Show detail</a>
                </div>
            </div>
            
        </div>
    );
};

export default InstructorDetail;