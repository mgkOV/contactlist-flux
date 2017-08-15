import * as firebase from 'firebase';
import actions from '../actions/actions';
import config from '../config/config';

try {
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

const firebaseRef = firebase.database().ref().child('contact');

export default {
  async saveContact({ id, name, phone, email }) {
    if (!id) {
      await firebaseRef.push({ name, phone, email });
    } else {
      await firebaseRef.update({ [id]: { name, phone, email } });
    }

    this.getContacts();
  },

  async deleteContact(id) {
    await firebaseRef.update({ [id]: null });
    this.getContacts();
  },

  async getContacts() {
    const contacts = [];
    const snapshot = await firebaseRef.once('value');

    snapshot.forEach(childSnapshot => {
      const { name, phone, email } = childSnapshot.val();
      contacts.push({
        id: childSnapshot.key,
        name,
        phone,
        email
      });
    });

    actions.recieveContacts(contacts);
  }
};
