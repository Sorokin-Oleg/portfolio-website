import React from 'react';

const ModalContactForm = ({name, modal, copyMessage, closeModal}) => {
    const displayState = modal ? 'flex':'none';

    return (
        <div className='modal-contact-form-container modal-open' style={{display:displayState}}>
                <h1>Hi, {name}!</h1>                    
                <p>This is demo form.</p>
                <p>To contact me please use <a href="https://www.linkedin.com/in/oleg-sorokin/" target='_blank'>LinkedIn</a>.</p>
                <p>You can also copy the text of your message by clicking on the button below.</p>
                <p>Thank!</p>
                <div>
                    <button onClick={copyMessage}>Copy</button>                       
                    <button onClick={closeModal}>Close</button>  
                </div>                
        </div>
    );
};

export default ModalContactForm;