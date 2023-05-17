import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from 'components/ContactList'

import { useSelector } from "react-redux";
import { getContacts } from 'store/selectors'

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
    <h1>Phonebook</h1>
    <ContactForm/>
    <h1>Contacts</h1>
    <Filter/>
    {(contacts.length !== 0) && <ContactList/>}
    </div>
  );
}
export default App