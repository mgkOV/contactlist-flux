import dispatcher from '../dispatchers/dispatchers';
import c from '../constants/constants';

export default {
  saveContact(contact) {
    dispatcher.handleViewAction({
      actionType: c.SAVE_CONTACT,
      contact
    });
  },

  recieveContacts(contacts) {
    dispatcher.handleViewAction({
      actionType: c.RECIEVE_CONTACTS,
      contacts
    });
  }
};
