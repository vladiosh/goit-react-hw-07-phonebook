import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Head } from './App.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { getError, getIsLoading } from '../../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Head>Phonebook</Head>
      <ContactForm />
      <Head>Contacts</Head>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <p>Something goes wrong</p>}
      <ContactList />
    </Container>
  );
};

export default App;
