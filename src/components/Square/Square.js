import React from 'react';
import './Square.css';

export default props => (
    <button className='Square' onClick={props.onClick}>
        {props.value}
    </button>
)