import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ul>
        {contacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;
