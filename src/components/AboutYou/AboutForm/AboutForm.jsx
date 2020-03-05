import React, {useEffect, useState} from 'react';
import BackArrow from "../../backArrow/BackArrow";
import Title from "../../Title/Title";
import './AboutForm.css'
import {connect} from "react-redux";
import {dataAction} from "../../../store/actions/dataAction";
import {getStartedAction} from "../../../store/actions/getStartedSliderAction";

const AboutForm = ({newData, avatar, getNumSlide, nextSlide}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [userCheck, setUserCheck] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        setUserCheck(userName.length >= 12 ? true : false)
    }, [userName])
    useEffect(() => {
        setShowCheck(email.length >= 12 ? true : false)
        setDisabled(userName.length >= 12 && email.length >= 12 ? false : true)
    }, [email, userName]);
    useEffect(() => {

    }, [avatar]);
    const onHandleSubmit = e => {
        e.preventDefault();
        const newObj = {
            userName,
            email,
            address
        };
        newData(newObj);
        getNumSlide(nextSlide + 1)
    };
    return (
        <div className='AboutForm'>
            <img width={100} src={avatar} alt=""/>
            <BackArrow/>
            <Title title='More about you'/>
            <span>For delivery updates</span>
            <form onSubmit={onHandleSubmit}>
                <div className='input-wrap'>
                    <div className='validate' style={{color: !userCheck ? 'red' : 'green'}}>
                        {!userCheck ? 'нужно минимум 12 символов' : 'Молодец!'}
                    </div>
                    <span>First and last name</span>
                    {userCheck ? <i className='fa fa-check'/> : null}
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </div>
                <div className='input-wrap'>
                    <div className='validate' style={{color: !userCheck ? 'red' : 'green'}}>
                        {!showCheck ? 'нужно минимум 12 символов' : 'Молодец!'}
                    </div>
                    <span>Email address</span>
                    {showCheck ? <i className='fa fa-check'/> : null}
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='input-wrap'>
                    <span>address</span>
                    <input type="text" value={address}
                           onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <button disabled={disabled} style={{background: disabled ? '#ccc' : ''}}>Get Started</button>
            </form>
        </div>
    );
};

const state = state => ({
    avatar: state.data.avatar,
    nextSlide: state.getStarted.currentSlide,
})
const dispatch = dispatch => ({
    newData: data => {
        dispatch(dataAction(data))
    },
    getNumSlide: index => {
        console.log(index)
        dispatch(getStartedAction(index))
    },
})
export default connect(state, dispatch)(AboutForm);