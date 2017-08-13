import { EventEmitter } from 'events';
import appApi from '../utils/appApi';
import dispatcher from '../dispatchers/dispatchers';
import c from '../constants/constants';

const CHANGE_EVENT = 'change';

let _contacts = [];

const appStore = Object.assign({}, EventEmitter.prototype, {
  setContacts(contacts) {
    _contacts = contacts;
  },
  saveContact(contact) {
    _contacts.push(contact);
  },
  getContacts() {
    return _contacts;
  },
  emitChange() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
});

dispatcher.register(payload => {
  const action = payload.action;

  switch (action.actionType) {
    case c.SAVE_CONTACT:
      appApi.saveContact(action.contact);
      appStore.saveContact(action.contact);
      appStore.emitChange();
      break;
    case c.RECIEVE_CONTACTS:
      console.log('Recieving contacts...');
      appStore.setContacts(action.contacts);
      appStore.emitChange();
      break;
  }

  return true;
});

export default appStore;
