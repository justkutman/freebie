import React from 'react';
import './Success.css'
import Title from "../Title/Title";

const Success = () => {
    return (
        <div className='success-page'>
            <i className='fa fa-check'/>
            <Title title='Your account has been
successfully added!'/>
            <p>Lorem ipsum dollor sit ament pallentesque
                adeipiscing elit enim minim ven
                ultricies eget, tempor sit amet, ante.</p>
        </div>
    );
};

export default Success;