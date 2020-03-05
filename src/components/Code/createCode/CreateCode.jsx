import React, {useEffect, useState} from 'react';
import './createCode.css';
import {connect} from "react-redux";
import {dataAction} from "../../../store/actions/dataAction";
import {getStartedAction} from "../../../store/actions/getStartedSliderAction";
import Button from "../../Button/Button";

const CreateCode = (props) => {
    const [code, setCode] = useState([]);
    const [disabled, setDisabled] = useState(true);


    useEffect(() => {
        setDisabled(code.length >= 4 ? false : true)
    }, [code])
    const onClickNum = num => {
        setCode([...code, num])
    };
    if (code.length === 5) {
        code.pop()
    }
    const handlePassCode = e => {
        props.passCode({psCode: code});
        if (e.currentTarget.dataset.direction === 'next') {
            props.slider(props.slideIndex - 1);
            console.log('sex')
        } else {
            props.slider(props.slideIndex + 1);
            console.log('dont sex')
        }
    }
    console.log(code[0])
    return (
        <div className='create-passcode'>

            <div className="create-title">
                <h4>Create passcode</h4>
                <span>Enter your OTP code here. Used for logging in.</span>
            </div>
            <div className="num-blocks-wrap">
                <div className="num-blocks"
                     style={{background: code[0] || code[0] == false ? 'linear-gradient(234.25deg, #7EF192 0%, #2DC897 94.47%)' : '#fff'}}>{code[0]}</div>
                <div className="num-blocks"
                     style={{background: code[1] || code[1] == false ? 'linear-gradient(234.25deg, #7EF192 0%, #2DC897 94.47%)' : '#fff'}}>{code[1]}</div>
                <div className="num-blocks"
                     style={{background: code[2] || code[2] == false ? 'linear-gradient(234.25deg, #7EF192 0%, #2DC897 94.47%)' : '#fff'}}>{code[2]}</div>
                <div className="num-blocks"
                     style={{background: code[3] || code[3] == false ? 'linear-gradient(234.25deg, #7EF192 0%, #2DC897 94.47%)' : '#fff'}}>{code[3]}</div>
            </div>

            <div className="create-passcode-wrap">
                <div className="num-wrap">
                    <div onClick={() => onClickNum(1)} className="key">1</div>
                    <div onClick={() => onClickNum(2)} className="key">2</div>
                    <div onClick={() => onClickNum(3)} className="key">3</div>
                </div>
                <div className="num-wrap">
                    <div onClick={() => onClickNum(4)} className="key">4</div>
                    <div onClick={() => onClickNum(5)} className="key">5</div>
                    <div onClick={() => onClickNum(6)} className="key">6</div>
                </div>
                <div className="num-wrap">
                    <div onClick={() => onClickNum(7)} className="key">7</div>
                    <div onClick={() => onClickNum(8)} className="key">8</div>
                    <div onClick={() => onClickNum(9)} className="key">9</div>

                </div>
                <div className="delete-wrap">
                    <div onClick={() => onClickNum(0)} className="zero key">0</div>
                    <svg onClick={() => setCode(code.slice(0, -1))} width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M6.89492 0H23.1198C23.606 0 24 0.409698 24 0.915217V14.6431C24 15.1483 23.606 15.558 23.1198 15.558H6.89492C6.64728 15.558 6.41108 15.4497 6.24416 15.2593L0.2295 8.39535C-0.0764998 8.04575 -0.0764998 7.51191 0.2295 7.1626L6.24416 0.298671C6.41113 0.108298 6.64728 0 6.89492 0ZM2.07117 7.77881L7.28366 13.7276H22.2396V1.83004H7.28366L2.07117 7.77881Z"
                              fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                              d="M14.8683 7.35065L16.7549 9.22318C17.1217 9.58727 17.1251 10.1809 16.7627 10.5493C16.5804 10.735 16.3393 10.8281 16.0988 10.8281C15.8618 10.8281 15.6251 10.7382 15.4431 10.5578L13.5564 8.68508L11.6618 10.6123C11.4792 10.7976 11.2381 10.8908 10.9976 10.8908C10.7606 10.8908 10.5239 10.8008 10.3419 10.6204C9.97514 10.2563 9.97171 9.66273 10.3338 9.2942L12.2285 7.36699L10.3418 5.49432C9.9751 5.13019 9.97167 4.53664 10.3341 4.16811C10.6958 3.79988 11.2869 3.79613 11.6536 4.15997L13.5403 6.03259L15.3732 4.16822C15.7356 3.79969 16.326 3.79624 16.6931 4.16008C17.0599 4.52422 17.0633 5.11776 16.7012 5.4863L14.8683 7.35065Z"
                              fill="white"/>
                    </svg>
                </div>

            </div>
            <form onSubmit={handlePassCode}>
                <Button direction='next' disabled={disabled} text='Continue'/>
            </form>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({
    passCode: code => {
        dispatch(dataAction(code))
    },
    slider: index => {
        console.log(index)
        dispatch(getStartedAction(index))
    },
});
const state = state => ({
    slideIndex: state.getStarted.currentSlide,
    indexDots: state.getStarted.indexDots
});

export default connect(state, mapDispatchToProps)(CreateCode);