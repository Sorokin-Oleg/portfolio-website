import React, {Component} from 'react';
import ContactForm from './components/sectionContact/ContactForm';
import Earth from './components/sectionContact/Earth';

const SectionContact = () => {
    return (
        <section className='content contact-container'>
            <ContactForm />
            <Earth/>
        </section>
    );
}

export default SectionContact;