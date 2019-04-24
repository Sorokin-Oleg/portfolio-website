import React, {Component} from 'react';

const ModalContactForm = (props) => {
    let displayState = props.modal ? 'flex':'none';

    return(
        <div className='modal-contact-form-container' style={{display:displayState}}>
                <h1>Hi, {props.name}!</h1>                    
                <p>This is demo form.</p>
                <p>To contact me please use <a href="https://www.linkedin.com/" target='_blank'>LinkedIn</a>.</p>
                <p>You can also copy the text of your message by clicking on the button below.</p>
                <p>Thank!</p>
                <div>
                    <button onClick={props.copyMessage}>Copy</button>                       
                    <button onClick={props.closeModal}>Close</button>  
                </div>                
        </div>
    );
};

export default ModalContactForm;