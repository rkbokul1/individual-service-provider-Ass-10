import React from 'react';

const Extra = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Newsletter</h1>

            <div className="row gy-3 d-flex text-center">
                <div className="col-lg-10 col-md-10">
                    <input className='form-control' type="email" name="" id="" />
                </div>
                <div className="col-lg-2 col-md-2">
                    <button className='btn btn-md btn-danger'>Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Extra;