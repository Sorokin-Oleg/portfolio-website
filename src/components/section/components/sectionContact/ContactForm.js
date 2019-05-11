import React, {Component} from 'react';
import ModalContactForm from './ModalContactForm';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            modal: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.escCloseModal = this.escCloseModal.bind(this);
        this.copyMessage = this.copyMessage.bind(this);        
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    };

    handleSubmit(event) {
        this.setState({modal:true});
        event.preventDefault();
    };

    /**
     * Copy text to clipboard
     */
    copyMessage() {
        navigator.clipboard.writeText(this.state.message);
        this.closeModal();
    };

    /**
     * When closing the modal window we clean the forms
     */
    closeModal() {
        this.setState({modal:false});
        this.setState({name:'',email:'',subject:'',message:''})
    };

    /**
     * The function monitors the status of the modal window and the events of the pressed ESC button.
     * Subject to the conditions, runs the function of closing the modal window
     */
    escCloseModal(event) {
        if(event.keyCode === 27 && this.state.modal) {
            this.closeModal();
        }; 
    };

    componentDidMount() {
        document.addEventListener('keydown', this.escCloseModal, false);
    };
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.escCloseModal, false);
    };

    render () {
        return (
            <div className='form-container'>
                <div className='form-head'>        
                    <h1>Contact me</h1>
                    <p>This form is just an example. To contact me please use <a href="https://www.linkedin.com/" target='_blank'>LinkedIn</a>.</p>
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
                <ModalContactForm modal={this.state.modal} name={this.state.name}
                                  closeModal={this.closeModal} copyMessage={this.copyMessage} />
            </div>
        );
    };
};

export default ContactForm;