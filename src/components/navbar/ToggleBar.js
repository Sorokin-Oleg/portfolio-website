import React, {Component} from 'react';

class ToggleBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addClass: false
        }        
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({addClass: !this.state.addClass});
    }

    render() {
        let toggleBar = 'toggle-bar';

        if (this.state.addClass) {
            toggleBar = 'toggle-bar toggle-bar-opened';
        }
        
        return (
            <button className={toggleBar} onClick={this.toggle}>
                <span className='toggle-bar-top'></span>
                <span className='toggle-bar-middle'></span>
                <span className='toggle-bar-bottom'></span>
            </button>
        )
    }
}

export default ToggleBar;