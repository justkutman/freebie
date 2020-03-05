import React from 'react';

const BackArrow = ({onHandleSlide}) => {
    return (
        <div>
            <i data-direction='prev' onClick={onHandleSlide} className="fa fa-long-arrow-left" aria-hidden="true"></i>
        </div>
    );
};

export default BackArrow;