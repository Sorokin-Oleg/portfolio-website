import React, {Component} from 'react';
import Stars from './components/sectionHome/Stars';
import Rotate from './components/Rotate';

const SectionHome = () => {
    return (
        <section>
            <div className='content'>
                <div className='home-container'>
                    <Stars />
                    <div className='home-content'>                    
                        <img src="./assets/img/home_logo.svg" alt="Sorokin Oleg - Frontend Developer"/>  
                        <h1><span>{'<h1>'}</span>{"Hi, I'm Sorokin Oleg"}<span>{'<h1>'}</span></h1>                  
                        <h1><span>{'<'}</span>{'Frontend Developer'}<span>{'/>'}</span></h1>
                    </div>
                </div>            
            </div>
           <Rotate/>
        </section>
    );
};

export default SectionHome;