import React from 'react';
import './PrevProject.css';
import prevProjectData from '../../../fakeData/prevProjectData';
import template1 from '../../../images/template1.jpg';
import template2 from '../../../images/template2.jpg';
import template3 from '../../../images/template3.jpg';
import template4 from '../../../images/template4.jpg';
import template5 from '../../../images/template5.jpg';

const PrevProject = () => {
    const fontColor = {
        color:'purple'
        ,fontSize:'25px'
    }
    return (
        <div>
            <h2 className="text-center p-2">Previous Projects </h2>
            <div className="row container-fluid">
                <div className="col-8 col-md-8 offset-2 carousel-container">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={template1} class="d-block w-100 img-fluid" alt="..." />
                        <div style={fontColor} class="carousel-caption d-none d-md-block">
                        <h5>{prevProjectData[0].name}</h5>
                            <p>{prevProjectData[0].description}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={template2} class="d-block w-100 img-fluid" alt="..." />
                        <div style={fontColor} class="carousel-caption d-none d-md-block">
                        <h5>{prevProjectData[1].name}</h5>
                            <p>{prevProjectData[1].description}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={template3} class="d-block w-100 img-fluid" alt="..." />
                        <div style={fontColor} class="carousel-caption d-none d-md-block">
                        <h5>{prevProjectData[2].name}</h5>
                            <p>{prevProjectData[2].description}</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={template5} class="d-block w-100 img-fluid" alt="..." />
                        <div style={fontColor} class="carousel-caption d-none d-md-block">
                            <h5>{prevProjectData[3].name}</h5>
                            <p>{prevProjectData[3].description}</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrevProject;