import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import Loader from "components/Loader";
import ContactList from 'components/ContactList';

import { useSelector } from "react-redux";
import { selectError, selectIsLoading, selectItems } from 'store/selectors'

import css from './App.module.css'

const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const items = useSelector(selectItems);


  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h1>Contacts</h1>
      <Filter/> 
      <div className={css.selectors}>
        { isLoading && <Loader width={100}/> }
        {error && <p>{error}</p>}
        {items && <ContactList/>}
      </div>
    </div>
  );
}
export default App