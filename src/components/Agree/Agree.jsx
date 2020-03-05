import React from 'react';
import './Agree.css'

const Agree = ({onHandleSlide}) => {
    return (
        <div className='agree'>
            <h4>One last thing</h4>
            <span>Terms of service</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id
                est laborum.
            </p>
            <p>
                Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas ipsum.
                Vestibulum tortor quam, feugiat vitae, ultricies eget,
                tempor sit amet, ante eu libero sit amet quam.
            </p>
            <p>
                Aenean ultricies mi vitae est. Mauris placerat
                eleifend leo. Quisque sit est et sapien ullamcorper.</p>
            <div className="buttons-wrap">
                <button className='success' data-direction='next' onClick={onHandleSlide}><i className='fa fa-check'/>Agree
                </button>
                <button className='decline' data-direction='prev' onClick={onHandleSlide}><i className="fa fa-times"/>
                    Decline
                </button>
            </div>
        </div>
    );
};

export default Agree;