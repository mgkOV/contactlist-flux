import React, { Component } from 'react';
import actions from '../actions/actions';
import store from '../stores/appStore';
import dispatcher from '../dispatchers/dispatchers';
import AddForm from './AddForm';
import appApi from '../utils/appApi';
import ContactList from './ContactList';

const getAppState = () => ({
  contacts: store.getContacts() || [],
  contactToEdit: store.getContactToEdit()
});

class App extends Component {
  state = getAppState();

  componentDidMount() {
    store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    store.removeChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(getAppState());
  };

  render() {
    return (
      <div>
        <AddForm contactToEdit={this.state.contactToEdit} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
