import React, {Component} from "react";
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from "./ContactList/ContactList";
import Filter from "./FilterSearch/FilterSearch";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    if (contacts.find((contact) => contact.name === newContact.name)) {
      NotificationManager.error(`It's already there "${newContact.name}"`, 'Are you blind?', 7000);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts]
    }));
    NotificationManager.success(`"${newContact.name}" Continue...`, `It's beautiful!`, 7000);
    return;
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  };
  showContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  };
  onDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId)
    }));
  };
  render() {
    const { filter } = this.state;
    const showContacts = this.showContacts();
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm onSubmit={this.addContact} />

        <h2>Filter</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        
        <h2>Contacts</h2>
        <ContactList
          contacts={showContacts}
          onDeleteContact={this.onDeleteContact}
        />
          <NotificationContainer/>
      </>
    );
  }
}

export default App;