import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h2>Список контактов:</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Телефон</th>
              <th>Эл. Почта</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.contacts.map(contact => {
              return <Contact key={contact.id} {...contact} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
