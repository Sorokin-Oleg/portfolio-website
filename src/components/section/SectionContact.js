import React, {Component} from 'react';
import ContactForm from './components/sectionContact/ContactForm';
import Earth from './components/sectionContact/Earth';

const SectionContact = () => {
    return (
        <section className='content'>
            <div className='contact-container'>
                <ContactForm />
                <Earth/>
            </div>
        </section>
    );
};

export default SectionContact;