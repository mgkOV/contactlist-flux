import React from 'react';
import actions from '../actions/actions';

const Contact = ({ name, email, phone, id }) => {
  const deleteContact = () => {
    actions.deleteContact(id);
  };

  const editContact = () => {
    actions.editContact({ name, email, phone, id });
  };
  return (
    <tr>
      <td>
        {name}
      </td>
      <td>
        {phone}
      </td>
      <td>
        {email}
      </td>
      <td>
        <div className="btn-group btn-group-sm">
          <button className="btn btn-primary" onClick={editContact}>
            Изменить
          </button>
          <button className="btn btn-danger" onClick={deleteContact}>
            Удалить
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Contact;
