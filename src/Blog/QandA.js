import React from 'react';
import { Accordion } from 'react-bootstrap';

const qAnda = ({ans}) => {
    const {id, question, answer} = ans;

    return (
        <div className='container'>

            <Accordion defaultActiveKey={id}>
                <Accordion.Item eventKey={1}>
                    <Accordion.Header>{question}</Accordion.Header>
                    <Accordion.Body>
                        {answer}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
};


export default qAnda;