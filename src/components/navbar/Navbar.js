import React, {Component} from 'react';
import NavbarButton from './NavbarButton';
import ToggleBar from './ToggleBar';

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {toggleActive: false}
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
        let navOpen = this.state.toggleActive ? 'navbar-open' : 'navbar-close';

        return (
            <section className='navbar-container'>
                <div id='navbar_logo'><img src="assets/img/home_logo.svg" alt="Sorokin Oleg - Frontend Developer"/></div>
                <nav id='navbar_content' className={navOpen}>
                    <NavbarButton links='/' name='home' iconName='fas fa-home'/>
                    <NavbarButton links='/about/' name='about' iconName='fas fa-user'/>
                    <NavbarButton links='/skills/' name='skills' iconName='fas fa-cog'/>
                    <NavbarButton links='/work/' name='work' iconName='fas fa-eye'/>
                    <NavbarButton links='/contact/' name='contact' iconName='fas fa-paper-plane'/>
                </nav>
                <div id='navbar_links'>
                    <ul className='navbar-links'>
                        <li><a href="https://github.com/Sorokin-Oleg" target="_blank"><i className="fab fa-github"></i></a></li>
                        <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://vk.com/sorokin_robots" target="_blank"><i className="fab fa-vk"></i></a></li>
                    </ul>                    
                </div>
                <ToggleBar active={this.state.toggleActive} onClick={this.toggleBarActive}/>
            </section>
        )
    }    
};

export default Navbar; 