import React from 'react';
import './Modal.css';

const Modal = ({code, toggleModal}) => {
    return (
        <>
            <div className="overlay"></div>
            <div className='modal'>
                <i onClick={() => toggleModal(false)} className='fa fa-close' />
                <span>Ваш код || Your Code</span><br/>
                <b>{code}</b>
            </div>
        </>
    );
};

export default Modal;