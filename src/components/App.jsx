import { useSelector } from 'react-redux';

import { FormInput } from './Form/FormInput';
import { ContactsList } from './ContactsList/ContactsList';
import { getContacts } from 'redux/selectors';
import { Filter } from './Filter/Filter';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <FormInput />
      <Filter />

      {contacts.length !== 0 && <ContactsList />}
    </>
  );
};
