import React, {Component} from 'react';

class ToggleBar extends React.Component {
    render() {        
        let toggleBar = this.props.active ? 'toggle-bar toggle-bar-opened' : 'toggle-bar';

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