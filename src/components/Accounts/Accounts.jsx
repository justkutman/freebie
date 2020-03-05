import React, {useState} from 'react';
import {connect} from "react-redux";
import data from "../../store/reducers/dataReducer";
import Bank from "./Bank";
import Manual from "./Manual";

const Accounts = ({isAccount, newData}) => {
    return (
        <>
            {isAccount == 'bank' ? <Bank/> : <Manual/>}
        </>
    );
};
const state = state => ({
    isAccount: state.data.account
})
export default connect(state)(Accounts);


