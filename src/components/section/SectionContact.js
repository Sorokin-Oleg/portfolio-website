import React, {Component} from 'react';
import ContactForm from './components/sectionContact/ContactForm';
import { YMaps, Map } from 'react-yandex-maps';


const SectionContact = () => {
    return (
        <section className='content contact-container'>
            <ContactForm />
            <YMaps>                                     
                <Map defaultState={{ center: [53.90, 27.56], zoom: 11 }} width='100%' height='100%'/>               
            </YMaps>
        </section>
    );
}

export default SectionContact;