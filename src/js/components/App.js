import React, { Component } from 'react';
import actions from '../actions/actions';
import store from '../stores/appStore';
import dispatcher from '../dispatchers/dispatchers';
import AddForm from './AddForm';
import appApi from '../utils/appApi';

const getAppState = () => ({
  contacts: store.getContacts()
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
    console.log(this.state.contacts);
    return (
      <div>
        <AddForm />
      </div>
    );
  }
}

export default App;
