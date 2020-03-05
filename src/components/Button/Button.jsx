import React from 'react';
import './Button.css'

const Button = ({text, direction, onHandleSlide, className, disabled,}) => {
    return (
        <div className='unique-button'>
            <button disabled={disabled} className={className} onClick={onHandleSlide}
                    data-direction={direction}>{text}</button>
        </div>
    );
};

export default Button;