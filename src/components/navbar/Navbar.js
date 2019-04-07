import React, {Component} from 'react';
import NavbarButton from './NavbarButton';
import ToggleBar from './ToggleBar';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleActive: false
        }

        this.toggleBarActive = this.toggleBarActive.bind(this);
    }    
    /**
     * The method performed by the ToggleBar component.
     * Sets the state of the mobile menu (state: toggleActive).
     */
    toggleBarActive() {
        this.setState({toggleActive: !this.state.toggleActive});
    }
    
    render() {        
        let navOpen = 'navbar-close';

        if (this.state.toggleActive) {
            navOpen = 'navbar-open';
        } 

        return (
            <section className='navbar-container'>
                <div id='navbar_logo'></div>
                <nav id='navbar_content' className={navOpen}>
                    <NavbarButton name='home' iconName='fas fa-home' />
                    <NavbarButton name='about' iconName='fas fa-user' />
                    <NavbarButton name='skills' iconName='fas fa-cog' />
                    <NavbarButton name='work' iconName='fas fa-eye' />
                    <NavbarButton name='contact' iconName='fas fa-paper-plane' />
                </nav>
                <div id='navbar_links'>
                    <ul className='navbar-links'>
                        <li><a href="#"><i className="fab fa-github"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="#"><i className="fab fa-vk"></i></a></li>
                    </ul>                    
                </div>
                <ToggleBar active={this.state.toggleActive} onClick={() => this.toggleBarActive()}/>
            </section>
        )
    }    
};

export default Navbar; 