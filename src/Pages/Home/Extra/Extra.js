import React from 'react';

const Extra = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='text-center text-danger mb-3'>Newsletter</h1>
                <div className='d-flex justify-content-center'>
                    <input className='form-control w-50' type="text" name="" id="" placeholder='Enter email' />
                    <button className='mx-3 btn btn-lg btn-danger'>Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Extra;