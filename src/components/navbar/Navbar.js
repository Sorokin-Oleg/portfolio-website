import React, {Component} from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <section className='navbar-container'>
                <div id='navbar_logo'></div>
                <nav id='navbar_content'></nav>
                <div id='navbar_links'>
                    <ul>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                        <li><a href="#"></a></li>
                    </ul>
                </div>
            </section>
        );
    }
};

export default Navbar; 