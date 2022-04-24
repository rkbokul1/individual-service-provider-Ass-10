import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const {name, title, description, img } = service;
    const navigate = useNavigate();
    
    const handleServiceDetail = (e) =>{
        navigate(`/service/${e}`);
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Button onClick={() => handleServiceDetail(name)} className='btn btn-danger' variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Service;