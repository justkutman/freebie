import React, {useState} from 'react';
import './App.css';
import One from "./components/getStarted/One/One";
import Two from "./components/getStarted/Two/Two";
import Three from "./components/getStarted/Three/Three";
import {connect} from "react-redux";
import {getStartedAction} from "./store/actions/getStartedSliderAction";
import GetStartedNum from "./components/getStartedNumber/getStartedNum";
import CreateCode from "./components/Code/createCode/CreateCode";
import Verification from "./components/Code/Verification/Verification";
import Agree from "./components/Agree/Agree";
import BudgetPlanner from "./components/BudgetPlanner/BudgetPlanner";
import AboutYou from "./components/AboutYou/AboutYou";
import AboutForm from "./components/AboutYou/AboutForm/AboutForm";
import AddAccount from "./components/AddAccounts/AddAccount";
import AddAccountStepTwo from "./components/AddAccounts/AddAccountStepTwo/AddAccountStepTwo";
import Rradio from "./components/Radio/Rradio";
import Accounts from "./components/Accounts/Accounts";
import Success from "./components/Success/Success";

function App(props) {
    const [active, setActive] = useState([]);
    const onHandleSlide = e => {
        if (e.currentTarget.dataset.direction === 'next') {
            props.slider(props.slideIndex + 1)
        } else {
            props.slider(props.slideIndex - 1)
        }
    };
    const getStarted = [
        <One onHandleSlide={onHandleSlide}/>,
        <Two onHandleSlide={onHandleSlide}/>,
        <Three onHandleSlide={onHandleSlide}/>,
        <GetStartedNum onHandleSlide={onHandleSlide}/>,
        <CreateCode onHandleSlide={onHandleSlide}/>,
        <Verification onHandleSlide={onHandleSlide}/>,
        <Agree onHandleSlide={onHandleSlide}/>,
        <BudgetPlanner onHandleSlide={onHandleSlide}/>,
        <AboutYou onHandleSlide={onHandleSlide}/>,
        <AboutForm/>,
        <AddAccount onHandleSlide={onHandleSlide}/>,
        <AddAccountStepTwo/>,
        <Accounts/>,
        <Success/>,
    ];
    console.log(active);
    return (
        <div className="App">
            <div className="get-slider">
                {getStarted[props.slideIndex]}
            </div>
        </div>
    );
}

const state = state => ({
    slideIndex: state.getStarted.currentSlide,
    indexDots: state.getStarted.indexDots
});

const mapDispatch = dispatch => ({
    slider: index => {
        console.log(index)
        dispatch(getStartedAction(index))
    },

})
export default connect(state, mapDispatch)(App);
