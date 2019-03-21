import React, { Component } from 'react';
import { Container, Header, Button, Icon, Segment } from 'semantic-ui-react';
import Contacts from './contacts/Contacts';
import ContactForm from './contacts/ContactForm';

class App extends Component {
  state = { 
    contacts: [
      {id: 1, firstName: 'Bob', phone: '801-123-1234'},
      {id: 2, firstName: 'Rob', phone: '801-123-1424'},
      {id: 3, firstName: 'Kob', phone: '801-123-1432'}
    ],
    showForm: true
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  addContact = (contactData) => {
    let contact = { id: this.getId(), ...contactData }
    this.setState({ contacts: [contact, ...this.state.contacts] })
  }

  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( contact => {
      if (contact.id !== id )
        return contact
    })
    this.setState({ contacts: [...contacts]})
  }

  render() {
    const { contacts, showForm } = this.state
    return (
      <Container>
        <Header as='h1'>React Contact List</Header>
        <Segment>
          <Button icon color='brown' onClick={this.toggleForm}>
            <Icon name={ showForm ? 'angle double up' : 'angle double down' } />
          </Button>
          { showForm ? <ContactForm add={this.addContact} /> : null } 
        </Segment>
        <br />
        <Contacts contacts={contacts} remove={this.removeContact} />
      </Container>
    );
  }
}

export default App;


