import React from 'react';

const Footer = () => {
    return (
        <div className='container mt-5'>
            <p className='text-center'><small>Copyrights Reserve &copy;Stack<span className='text-danger'>-master</span> {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;