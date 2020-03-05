import React from 'react';
import './AddAccount.css'
import {connect} from "react-redux";

const AddAccount = ({avatar, onHandleSlide}) => {
    return (
        <div className='create-account'>
            <div className="create-wrap">
                <div className="create-header">
                    <div className="img-user">
                        <img src={!avatar ? 'https://freesvg.org/img/1397379218.png' : avatar} alt=""/>
                        <span>Savings 2019</span>
                    </div>
                    <div className="header-text">
                        <h5>Accounts</h5>
                        <span>Checkings 2019</span>
                    </div>
                    <div className="icon-plus">
                        <i className='fa fa-plus'></i>
                    </div>
                </div>
                <div className="create-content">
                    <div className="create-content_title">
                        You don’t have set any account. <br/>
                        Create one in seconds.
                    </div>
                    <img src={require('./content.png')} alt=""/>
                    <button data-direction='next' onClick={onHandleSlide}>Add account</button>
                </div>
            </div>
        </div>
    );
};
const state = state => ({
    avatar: state.data.avatar,
    slideIndex: state.getStarted.currentSlide,
})
export default connect(state)(AddAccount);