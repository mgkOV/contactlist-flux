import React, { Component } from 'react';
import actions from '../actions/actions';

export default class AddForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: this.props.contactToEdit ? this.props.contactToEdit.id : null,
      name: this.name.value.trim(),
      phone: this.phone.value.trim(),
      email: this.email.value.trim()
    };

    if (contact.name) {
      actions.saveContact(contact);
      this.name.value = '';
      this.phone.value = '';
      this.email.value = '';
    }
  };

  render() {
    const contact = this.props.contactToEdit;
    if (contact) {
      this.name.value = contact.name;
      this.phone.value = contact.phone;
      this.email.value = contact.email;
    }
    return (
      <div className="well">
        <h3>Добавить контакт</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              ref={input => (this.name = input)}
              className="form-control"
              placeholder="Введите имя..."
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={input => (this.phone = input)}
              className="form-control"
              placeholder="Введите номер телефона..."
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              ref={input => (this.email = input)}
              className="form-control"
              placeholder="Введите email..."
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {contact ? 'Cохранить' : 'Добавить'}
          </button>
        </form>
      </div>
    );
  }
}
