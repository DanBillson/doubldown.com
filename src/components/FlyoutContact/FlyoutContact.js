import './FlyoutContact.scss';
import * as emailjs from 'emailjs-com';
import React, { Component } from 'react';
import { ReactComponent as Cross } from '../../assets/images/cross.svg';

class FlyoutContact extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: '',
            email: '',
            message: '',
            errors: {
                name: '',
                email: '',
                message: ''
            },
            status: ''
        }
    }

    componentDidMount() {
        const close = document.querySelector('.js-close-contact');
        close.addEventListener('click', () => {
            document.querySelector('.js-contact').classList.remove('open'); 
        })
    }

    handleInputChange(event) {
        event.preventDefault();
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({[name]: value});
    }

    validateForm() {
        let errors = {};
        let formIsValid = true;
        let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

        if (!this.state.name) {
            errors.name = 'Name is required';
            formIsValid = false;
        }

        if (!this.state.email) {
            errors.email = 'Email is required';
            formIsValid = false;
        }

        if (!this.state.message || this.state.message.length < 15) {
            errors.message = 'Message is too short';
            formIsValid = false;
        }

        if (!pattern.test(this.state.email)) {
            errors.email = 'Email is not valid';
            formIsValid = false;
        }

        this.setState({ errors });
        return formIsValid;
    }

    submitForm(event) {
        event.preventDefault();

        if (!this.validateForm()) {
            return;
        }
        const userId = 'user_VT0NhETHk1gTsdd5QplUx'
        const serviceId = 'default_service';
        const templateId = 'template_CHBuIuSh';
        const templateParams = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then((res) => {
            this.setState({ status: 'Message Sent' });
            console.log(res.status, res.text);
        }).catch((err) => {
            this.setState({ status: 'Error sending message' });
            console.log(err);
        })

        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    render() {
        return(
            <div className="flyoutContact js-contact">
                <Cross className="flyoutContact__exit js-close-contact"/>
                <h2 className="flyoutContact__title">Let's get started</h2>
                <form className="flyoutContact__form" method="post">
                    <div className="flyoutContact__inputs">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            required="required"
                            onChange={ this.handleInputChange.bind(this) }
                            value={ this.state.name }
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email"
                            required="required"
                            onChange={ this.handleInputChange.bind(this) }
                            value={ this.state.email } 
                        />
                    </div>
                    <div className="flyoutContact__message">
                        <textarea 
                            name="message" 
                            placeholder="message" 
                            required="required"
                            onChange={ this.handleInputChange.bind(this) }
                            value={ this.state.message } 
                        />
                        <p className="flyoutContact__status js-form-status">{ this.state.errors.name }</p>
                        <p className="flyoutContact__status js-form-status">{ this.state.errors.email }</p>
                        <p className="flyoutContact__status js-form-status">{ this.state.errors.message }</p>
                        <p className="flyoutContact__status js-form-status">{ this.state.status }</p>
                        <input className="flyoutContact__submit button button--tertiary" onClick={ this.submitForm.bind(this) } type="submit" value="send"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default FlyoutContact;