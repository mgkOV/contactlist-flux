import * as firebase from 'firebase';
import actions from '../actions/actions';
import config from '../config/config';

const fbApp = firebase.initializeApp(config);
const db = fbApp.database().ref('contact');

export default {
  saveContact(contact) {
    const db = fbApp.database().ref('contact');
    const newContact = db.push();
    newContact.set(contact);
  },

  getContacts() {
    let contacts = [];
    const db = fbApp.database().ref('contact').orderByKey();

    db.once('value').then(snapshot => {
      snapshot.forEach(childShapshot => {
        const { name, phone, email } = childShapshot.val();
        contacts.push({
          id: childShapshot.key,
          name,
          phone,
          email
        });
      });
    });

    actions.recieveContacts(contacts);
  }
};
