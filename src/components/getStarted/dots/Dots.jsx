import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import './Dots.css';
import {getStartedAction} from "../../../store/actions/getStartedSliderAction";

const Dots = (props) => {
    const [dotsActive, setDotsActive] = useState(0);
    let {getNumSlide, indexDots} = props;


    return (
        <div className='dots-wrap'>
            <div onClick={() => getNumSlide(indexDots = 0)} className='dots'></div>
            <div onClick={() => getNumSlide(indexDots = 1)} className='dots'></div>
            <div onClick={() => getNumSlide(indexDots = 2)} className='dots'></div>
        </div>
    );
};
const state = state => ({
    indexDots: state.getStarted.currentSlide,

});
const mapDispatch = dispatch => ({
    getNumSlide: index => {
        dispatch(getStartedAction(index))
    }
});
export default connect(state, mapDispatch)(Dots);