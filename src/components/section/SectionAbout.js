import React, {Component} from 'react';
import Rotate from './Rotate';

const SectionAbout =() => {
    return (
        <section>
            <div className='content content-overflow-y'>
                <div className='about-section'>
                    <div className='about-description-container'>
                        <h1>About me</h1>
                        <p>Hi, my name is Oleg. I was born in Minsk, Belarus. RIght from my childhood i was fond of electronics, and a bit later, i got interested in robotics. That was the moment when i discovered programming. My first program was written in BASIC, and allowed control of DC motor with a TV remote control. I got deeper in robotics and automation as the time went by.</p>
                        <p>Then, in 2018, i got aquainted with web-development. All started up with automating a process, that would have a web-interface. I had no idea what will i face. The process of creating that application was something new, unkown. That hooked me up. And that was the firestarter.</p>
                    </div>
                    <div className='about-image-container'>
                        <img src="./assets/img/my-photo-circle.jpg" alt="Photo of Oleg Sorokin"/>
                    </div>
                </div>
            </div>
            <Rotate/>
        </section>
    );
};

export default SectionAbout;