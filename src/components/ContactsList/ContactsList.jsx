import { useSelector } from 'react-redux';

import { ContactsItem } from '../ContactsItem/ContactsItem';
import { getContacts, getFilterValue } from '../../redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {visibleContacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactsItem
                contactName={contact.name}
                contactNumber={contact.number}
                contactId={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
