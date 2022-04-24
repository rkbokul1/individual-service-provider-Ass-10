import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container my-5'>
            <div className="row g-5">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }

            </div>
        </div>
    );
};

export default Services;