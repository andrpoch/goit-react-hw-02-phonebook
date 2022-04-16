import React, { Component } from "react";
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
   state = { 
      name: '',
      number: '',
   }
   static propTypes = {
      onSubmit: PropTypes.func.isRequired,
   };
   handleChange = (e) => {
      const { name, value } = e.currentTarget;
      this.setState({
         [name]: value
      });
   }
   handleSubmit = (e) => {
      e.preventDefault();
      const { name, number } = this.state;
      this.props.onSubmit(name, number);
      this.reset();
   }
   reset =()=> {
      this.setState({
         name: '',
         number: '',
      });
   }
   render() {
      const { name, number } = this.state;
      return (
         <form className={s.form} onSubmit={this.handleSubmit}>
            <label className={s.label}>
               Name
            </label>
            <input
               className={s.input}
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               value={name}
               onChange={this.handleChange}
            />
            <label className={s.label}>
               Number
            </label>
            <input
               className={s.input}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
               value={number}
               onChange={this.handleChange}
            /> 
            <button type="submit" className={s.button}>
               Add contact
            </button>
         </form>
         
      );
   }
}

export default ContactForm;