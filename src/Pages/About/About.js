import React from 'react';
import img from '../../img/main.jpg';
import './About.css'

const About = () => {
    return (
        <div className='container about mt-5 pt-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-6 order-1 order-md-1 px-5">
                    <h1 className='text-danger'>Raihanul Kabir</h1>
                    <div>
                        <p><strong>Mern-stack (Full-stack) <br /> Web-Trainer</strong></p>
                        <h2 className='text-danger'><strong>Goal</strong></h2>
                        <p>Everybody have a desire goal. As a <strong>Trainer</strong> i have also
                            goal to teach every student well.
                            Not only teaching but also teach how to time management and Client handeling.
                            <br />
                            <p>There are many goals that a web developer may have, but some of the most common ones include creating visually appealing and user-friendly websites, developing sites that are optimized for search engine ranking, and ensuring that websites are properly coded and functional. In addition, web developers may also be responsible for maintaining and updating existing websites, as well as troubleshooting any technical issues that may arise.</p>
                        </p>
                        <h2 className='text-danger'><strong>Purpose</strong></h2>
                        <p>Web-Master is a individual service provider to teach the student about full-stack (mern-technoloy). In this services
                            i teach to student about- HTML-5, CSS-3, JS(ES-6), React.js node.js.</p>
                    </div>

                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 order-sm-2 text-center py-4">
                    <img className='about-img w-75 mx-auto' src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;