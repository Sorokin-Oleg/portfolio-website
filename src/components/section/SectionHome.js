import React, {Component} from 'react';
import Stars from './components/sectionHome/Stars';

const SectionHome = () => {
    return (
        <section className='content home-container'>
            <Stars />
            <div className='home-content'>                    
                <img src="assets/img/home_logo.svg" alt="Sorokin Oleg - Frontend Developer"/>  
                <h1><span>{'<h1>'}</span>{"Hi, I'm Sorokin Oleg"}<span>{'<h1>'}</span></h1>                  
                <h1><span>{'<'}</span>{'Frontend Developer '}<span>{'/>'}</span></h1>
            </div>
        </section>
    );
};

export default SectionHome;