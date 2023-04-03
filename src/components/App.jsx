import { FormInput } from './Form/FormInput';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <FormInput />
      <Filter />
      <ContactsList />
    </>
  );
};
