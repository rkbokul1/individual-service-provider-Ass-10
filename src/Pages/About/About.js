import React from 'react';
import img from '../../img/main.jpg'

const About = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6 order-1 order-md-1">
                    <h1>Raihanul Kabir</h1>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 order-sm-2">
                    <img className='rounded-circle w-75 mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;