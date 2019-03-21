import React from 'react';
import { Table, Label, Button } from 'semantic-ui-react';
import Contact from './Contact';


const Contacts = ({ contacts }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Option</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contacts.map( contact => (
          <Table.Row key={contact.id}>
            <Table.Cell>
              <Label>{contact.firstName}</Label>
            </Table.Cell>
            <Table.Cell>{contact.phone}</Table.Cell>
            <Table.Cell>
              <Button color='blue'>
                Delete
              </Button>
            </Table.Cell>
          </Table.Row>
        ))
      }
    </Table.Body>
  </Table>
)

export default Contacts