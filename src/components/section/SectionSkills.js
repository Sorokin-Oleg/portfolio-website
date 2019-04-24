import React, {Component} from 'react';

const SectionSkills = () => {
    return (
        <section className='content regular-section'>
            <div className='regular-item-text'>
                <h1>My Skills</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam luctus semper. Curabitur auctor fringilla pulvinar. Donec placerat elit in finibus fringilla. Praesent ac dignissim tortor. Integer tristique congue orci a venenatis. In hac habitasse platea dictumst. Cras pretium lectus ex, eu cursus nibh vulputate at. Phasellus pellentesque et turpis id vulputate. Donec sit amet tortor erat. Nullam cursus urna ac magna pretium suscipit. Donec vestibulum ut libero at porttitor. Pellentesque et urna quis sapien sodales mollis eget nec nisl. Pellentesque bibendum leo sit amet rhoncus tempus. Maecenas porta luctus molestie.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam luctus semper. Curabitur auctor fringilla pulvinar. Donec placerat elit in finibus fringilla. Praesent ac dignissim tortor. Integer tristique congue orci a venenatis. In hac habitasse platea dictumst. Cras pretium lectus ex, eu cursus nibh vulputate at. Phasellus pellentesque et turpis id vulputate. Donec sit amet tortor erat. Nullam cursus urna ac magna pretium suscipit. Donec vestibulum ut libero at porttitor. Pellentesque et urna quis sapien sodales mollis eget nec nisl. Pellentesque bibendum leo sit amet rhoncus tempus. Maecenas porta luctus molestie.</p>
            </div>
            <div className='regular-item-image'>
                <div className='regular-image-container'>
                    <img src="/assets/img/icons/html.svg" alt="HTML" style={{height:'50px'}} />
                    <img src="/assets/img/icons/css.svg" alt="CSS" style={{height:'50px'}} />
                    <img src="/assets/img/icons/bootstrap.svg" alt="Bootstrap" style={{height:'45px'}} />
                    <img src="/assets/img/icons/sass.svg" alt="SASS" style={{height:'45px'}} />
                </div>
                <div className='regular-image-container'>
                    <img src="/assets/img/icons/javaScript.svg" alt="JavaScript" style={{height:'45px'}} />
                    <img src="/assets/img/icons/jquery.svg" alt="jQuery" style={{height:'50px'}} />                    
                </div>
                <div className='regular-image-container'>
                    <img src="/assets/img/icons/react.svg" alt="React" style={{height:'50px'}} />
                    <img src="/assets/img/icons/redux.svg" alt="Redux" style={{height:'45px'}} />
                    <img src="/assets/img/icons/react-router.svg" alt="React-Router" style={{width:'50px'}} />
                </div>
                <div className='regular-image-container'>
                    <img src="/assets/img/icons/npm.svg" alt="npm" style={{height:'20px'}} />
                    <img src="/assets/img/icons/webpack.svg" alt="Webpack" style={{height:'45px'}} />
                    <img src="/assets/img/icons/git.svg" alt="Git" style={{height:'45px'}} />
                    <img src="/assets/img/icons/github.svg" alt="GitHub" style={{height:'45px'}} />
                    <img src="/assets/img/icons/highcharts.svg" alt="Hughcharts" style={{height:'45px'}}/>     
                </div>
            </div>
        </section>
    );
};

export default SectionSkills;