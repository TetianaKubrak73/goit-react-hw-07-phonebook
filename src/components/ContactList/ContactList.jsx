import React from 'react';
import {
  // useSelector,
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  // selectContacts,
  // selectFilter,
  selectVisibleContacts,
} from '../../redux/selector';
import style from './ContactList.module.css';
import { deleteContacts } from '../../redux/contacts/contact-operations';

// Компонент списка контактов
const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  const visibleContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  // Удаление контакта из списка
  const onDeleteContact = id => {
    const action = deleteContacts(id);
    dispatch(action);
  };

  // const visibleContacts = selectVisibleContacts();
  return (
    <ul className={style.list}>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ' : ' + contact.number}
          <button
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
