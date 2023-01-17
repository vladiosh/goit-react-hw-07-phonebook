import PropTypes from 'prop-types';
import { ContactItem, Text } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <ContactItem key={id}>
      <Text>{name}:</Text>
      <Text>{phone}</Text>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
