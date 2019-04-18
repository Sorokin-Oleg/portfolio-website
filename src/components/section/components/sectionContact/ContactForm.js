import React, {Component} from 'react';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className='form-container'>
                <div className='form-head'>        
                    <h1>Contact me</h1>
                    <p>This form is just an example. To contact me please use <a href="">LinkedIn</a></p>
                </div>
                <form className='form-content' autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className='form-content-header'>                       
                        <input className='form-content-header-item' type="text" placeholder='Name'
                               name='name' value={this.state.name} onChange={this.handleInputChange}
                               maxLength='40' autoFocus required /> 

                        <input className='form-content-header-item' type="email" placeholder='Email'
                               name='email' value={this.state.email} onChange={this.handleInputChange}
                               maxLength='40' required />
                    </div>                        
                    <input type="text" placeholder='Subject' maxLength='60'
                           name='subject' value={this.state.subject} onChange={this.handleInputChange} />
                           
                    <textarea placeholder='Message' maxLength='1000' required
                              name='message' value={this.state.message} 
                              onChange={this.handleInputChange}></textarea>  

                    <input type="submit" value='Send'/>                        
                </form>
            </div>
        )
    }
}

export default ContactForm;