import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, title, description, img } = service;
    const navigate = useNavigate();

    const handleServiceDetail = (e) => {
        navigate(`/service/${e}`);
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div >
                <CardGroup>
                    <Card style={{ height: 500 }}>
                        <Card.Img style={{ height: 200 }} variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button onClick={() => handleServiceDetail(name)} className='btn btn-danger' variant="primary">Details</Button>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>

        </div>
    );
};

export default Service;