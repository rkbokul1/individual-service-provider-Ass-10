import React from 'react';
import Banner from '../Banner/Banner'
import Extra from '../Extra/Extra';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner />
            <div className='container'>
                <Services />
                <Extra />
            </div>

        </div>

    );
};

export default Home;