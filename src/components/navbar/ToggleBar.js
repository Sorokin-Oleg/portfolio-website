import React, {Component} from 'react';

const ToggleBar = (props) => {       
    let toggleBar = props.active ? 'toggle-bar toggle-bar-opened' : 'toggle-bar';
    
    return (            
        <button className={toggleBar} onClick={props.onClick} >
            <span className='toggle-bar-top'></span>
            <span className='toggle-bar-middle'></span>
            <span className='toggle-bar-bottom'></span>
        </button>
    );
};

export default ToggleBar;