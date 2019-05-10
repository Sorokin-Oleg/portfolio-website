import React, {Component} from 'react';

const SectionAbout =() => {
    return (
        <section className='content content-overflow-y'>
            <div className='regular-section'>
                <div className='regular-item-text'>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam luctus semper. Curabitur auctor fringilla pulvinar. Donec placerat elit in finibus fringilla. Praesent ac dignissim tortor. Integer tristique congue orci a venenatis. In hac habitasse platea dictumst. Cras pretium lectus ex, eu cursus nibh vulputate at. Phasellus pellentesque et turpis id vulputate. Donec sit amet tortor erat. Nullam cursus urna ac magna pretium suscipit. Donec vestibulum ut libero at porttitor. Pellentesque et urna quis sapien sodales mollis eget nec nisl. Pellentesque bibendum leo sit amet rhoncus tempus. Maecenas porta luctus molestie.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam luctus semper. Curabitur auctor fringilla pulvinar. Donec placerat elit in finibus fringilla. Praesent ac dignissim tortor. Integer tristique congue orci a venenatis. In hac habitasse platea dictumst. Cras pretium lectus ex, eu cursus nibh vulputate at. Phasellus pellentesque et turpis id vulputate. Donec sit amet tortor erat. Nullam cursus urna ac magna pretium suscipit. Donec vestibulum ut libero at porttitor. Pellentesque et urna quis sapien sodales mollis eget nec nisl. Pellentesque bibendum leo sit amet rhoncus tempus. Maecenas porta luctus molestie.</p>
                </div>
                <div className='regular-item-image'>
                    <dir className='photo-container'>
                        <img src="./assets/img/my-photo-circle.jpg" alt="My photo"/>
                    </dir>
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;