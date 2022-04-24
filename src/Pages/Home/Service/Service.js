import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name, title, description, img } = service;

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
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
        </div>
    );
};

export default Service;