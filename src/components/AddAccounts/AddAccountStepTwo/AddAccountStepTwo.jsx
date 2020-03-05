import React, {useRef, useState} from 'react';
import Title from "../../Title/Title";
import './createSecond.css'
import {connect} from "react-redux";
import {dataAction, getAvatar, selectAccount} from "../../../store/actions/dataAction";
import {getStartedAction} from "../../../store/actions/getStartedSliderAction";

const AddAccountStepTwo = (props) => {
    const onHandleClick = nameAccount => {
        if (nameAccount == 'bank') {
            props.selectAccount('bank')
        }
        if (nameAccount == 'manual') {
            props.selectAccount('manual')
        }
    }

    return (
        <div className='AddAccountStepTwo'>
            <span>Cancel</span>
            <div>
                <div className="">
                    <input type="radio" name="size" id="size_1" value="small" checked/>
                    <label htmlFor='size_1' onClick={() => onHandleClick('bank')}>
                        <div
                            htmlFor="size_1"
                            className={`bank-account block-acc`}>
                            <div className="bank-account-title">
                                <h5>Bank account</h5>
                                <p>Automatically import cleared transactions
                                    from your personal bank account.</p>
                            </div>
                            <img src={require('./Bank.png')} alt=""/>
                        </div>
                    </label>
                </div>
                <div>
                    <input type="radio" name="size" id="size_2" value="small"/>
                    <label onClick={() => onHandleClick('manual')} htmlFor="size_2">
                        <div
                            className={`manual-account block-acc`}>
                            <div className="bank-account-title">
                                <h5>Manual account</h5>
                                <p>Setup a current ballance and get total
                                    control by manually adding transactions.</p>
                            </div>
                        </div>
                    </label>

                </div>
            </div>
            <button onClick={() => props.getNumSlide(props.slideIndex + 1)}>Continue</button>
        </div>
    );
};
const mapDispatchToProps = dispatch => ({

    getNumSlide: index => {
        console.log(index)
        dispatch(getStartedAction(index))
    },
    selectAccount: acc => {
        dispatch(selectAccount(acc))
    }

})
const state = state => ({
    slideIndex: state.getStarted.currentSlide,
})
export default connect(state, mapDispatchToProps)(AddAccountStepTwo);