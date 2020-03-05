import React from 'react';
import './Three.css'
import Dots from "../dots/Dots";
const Three = ({onHandleSlide}) => {
    return (
        <div className='three-page'>
            <div className="three-wrap">
                <div className="three-title">Light and Dark theme</div>
                <div className="three-img">
                    <img src={require('./1.png')} alt=""/>
                    <img src={require('./2.png')} alt=""/>
                </div>
                <div className="three-desc">
                    Take control of your money by tracking <br/>
                    your expenses, adding goals
                </div>
                <div className="three-dots">
                    <Dots/>
                </div>
                <div className="three-button">
                    <button data-direction='next' onClick={onHandleSlide}>Login</button>
                    <button data-direction='next' onClick={onHandleSlide}>Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Three;