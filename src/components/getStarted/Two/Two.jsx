import React from 'react';
import './Two.css'
import Dots from "../dots/Dots";

const Two = (props) => {
    return (
        <div className='two-page'>
            <div className="two-title">
                <h4>Welcome to Budget Planner</h4>
                <p>Take control of your money by tracking <br/>
                    your expenses, adding goals</p>
            </div>
            <img src={require('../One/2.png')} alt=""/>
            <div className="two-page-footer">
                <span data-direction='prev' onClick={props.onHandleSlide}>SKIP</span>
                <div className="dots-two">
                    <Dots/>
                </div>
                <button data-direction="next" onClick={props.onHandleSlide}
                        className="fa fa-arrow-right button-next"></button>
            </div>
        </div>
    );
};

export default Two;