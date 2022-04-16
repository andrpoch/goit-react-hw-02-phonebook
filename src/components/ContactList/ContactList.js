import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
   <div className={s.wrapper}>
   <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
         <ContactItem
            key={id}
            contactName={name}
            contactNumber={number}
            deleteContact={() => onDeleteContact(id)}
         />
      ))}
      </ul>
   </div>
);

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
       PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
  })
   ), 
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;