import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import { Container, Head } from './App.styled';

const App = () => {
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Container>
      <Head>Phonebook</Head>
      <ContactForm />
      <Head>Contacts</Head>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
