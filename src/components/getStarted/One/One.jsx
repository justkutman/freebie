import React from 'react';
import './One.css';
import Dots from "../dots/Dots";

const One = (props) => {
    return (
        <>
            <div className='one-page'>
                <div className="images-wrap">
                    <img src={require('./1.png')} alt=""/>
                    <img src={require('./2.png')} alt=""/>
                    <img src={require('./3.png')} alt=""/>
                </div>
                <div className="one-page-title">
                    <h5>Let’s get started</h5>
                    <p>Take control of your money <br/>
                        by tracking your expenses, adding goals</p>
                </div>
                <Dots/>
                <button data-direction="next" onClick={props.onHandleSlide}>Next</button>
            </div>
        </>
    );
};

export default One;