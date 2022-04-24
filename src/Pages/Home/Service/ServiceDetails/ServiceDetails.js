import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    console.log(serviceId)

    return (
        <div className='container text-center mt-4'>
            <h1>This Service is about: <span className='text-danger'>{serviceId}</span> related</h1>       
        </div>
    );
};

export default ServiceDetails;