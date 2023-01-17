import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

import { getContacts, getFilter } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filterContacts = visibleContacts();

  return (
    <>
      <ul>
        {filterContacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
