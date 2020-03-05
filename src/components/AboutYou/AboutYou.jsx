import React, {useEffect, useState} from 'react';
import BackArrow from "../backArrow/BackArrow";
import './AboutYou.css';
import Title from "../Title/Title";
import {connect} from "react-redux";
import {dataAction, getAvatar} from "../../store/actions/dataAction";
import styled from 'styled-components';
import data from "../../store/reducers/dataReducer";
import {getStartedAction} from "../../store/actions/getStartedSliderAction";

const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    display: block
`
const AboutYou = (props) => {
    const [src, setSrc] = useState('');
    const [redirect, setRedirect] = useState(false);
    const onSubmitData = e => {
        e.preventDefault();
        props.getAvatar(src);
        setRedirect(true)
    };

    useEffect(() => {
        if (redirect) {
            props.getNumSlide(props.slideIndex + 1);
        }
    })
    let baseURL = 'data:image/jpeg;base64,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'
    return (
        <div className='about'>
            <BackArrow/>
            <Title title='More about you'/>
            <div className="about-wrap">
                <span>Upload your profile picture</span>
                <Avatar src={!src ? baseURL : src}/>
                <div className="camera">
                    <input placeholder='введите ссылку на фотку' type="text"
                           onChange={(e) => setSrc(e.target.value)}/>
                </div>
                <span>Btw, you look great :)</span>
            </div>
            <div className="wrap">
                <span className='later' data-direction='prev' onClick={props.onHandleSlide}>Maybe later</span>
                <form onSubmit={onSubmitData}>
                    <button className='continue'>Continue</button>
                </form>
            </div>
        </div>
    );
};


const mapDispatchToProps = dispatch => ({
    getAvatar: avatar => {
        dispatch(getAvatar(avatar))
    },
    getNumSlide: index => {
        console.log(index)
        dispatch(getStartedAction(index))
    },
    dataAction: data => {
        dispatch(dataAction(data))
    }
})
const state = state => ({
    avatar: state.data.avatar,
    slideIndex: state.getStarted.currentSlide,
})
export default connect(state, mapDispatchToProps)(AboutYou);