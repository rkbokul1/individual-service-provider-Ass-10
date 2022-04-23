import React from 'react';

const Footer = () => {
    return (
        <div className='text-center'>
            <p><small>Copyrights Reserve &copy;Stack<span className='text-danger'>-master</span> {new Date().getFullYear()}</small></p>
        </div>
    );
};

export default Footer;