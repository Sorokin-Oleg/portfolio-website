import React, {Component} from 'react';
import Stars from './components/sectionHome/Stars'

class SectionHome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='content home-container'>
                <Stars />
                <h1>Hello World</h1>
            </section>
        );
    }
}

export default SectionHome;