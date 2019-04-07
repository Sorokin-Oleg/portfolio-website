import React, {Component} from 'react';

class ToggleBar extends React.Component {
    render() {        
        let toggleBar = 'toggle-bar';

        if (this.props.active) {
            toggleBar = 'toggle-bar toggle-bar-opened';
        }   

        return (            
            <button className={toggleBar} onClick={this.props.onClick} >
                <span className='toggle-bar-top'></span>
                <span className='toggle-bar-middle'></span>
                <span className='toggle-bar-bottom'></span>
            </button>
        )
    }
}

export default ToggleBar;