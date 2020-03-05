import React, {useState} from 'react';
import {connect} from "react-redux";
import data from "../../store/reducers/dataReducer";

const Bank = ({isAccount, newData}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [userCheck, setUserCheck] = useState(false);
    const [showCheck, setShowCheck] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const onHandleSubmit = e => {
        e.preventDefault();
        const newObj = {
            userName,
            email,
            address
        };
        newData(newObj);
    };
    return (
        <div className='AboutForm'>
            <span>MANUAL</span>
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
    isAccount: state.data.account
})
export default connect(state)(Bank);


