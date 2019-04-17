import React, {Component} from 'react';

class ContactForm extends React.Component {
    render () {
        return (
            <div className='form-container'>
                <div className='form-head'>        
                    <h1>Contact me</h1>
                    <p>This form is just an example. To contact me please use <a href="">LinkedIn</a></p>
                </div>                
                <form className='form-content'>
                    <div className='form-content-header'>                       
                        <input className='form-content-header-item' type="text" placeholder='Name' />                     
                        <input className='form-content-header-item' type="email" placeholder='Email' />                       
                    </div>                        
                    <input type="text" placeholder='Subject' />               
                    <textarea name="message" placeholder='Message' ></textarea>               
                    <input type="submit" value='Send'/>                        
                </form>
            </div>
        )
    }
}

export default ContactForm;