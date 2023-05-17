import { useEffect } from 'react'
import css from './ContactForm.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { addTask } from 'store/contactsSlice'
import { getContacts } from 'store/selectors'
 
const ContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const isContactExists = (value) => {
        return contacts.find(({name}) => name.toLowerCase() === value.toLowerCase());
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const {name, number} = e.target.elements;

        if(isContactExists(name.value)){
            alert(`${name.value} is already in contacts`);
            return;
          }

        dispatch(addTask({
            name: name.value,
            number: number.value,
        }))

        form.reset();
    }
    return(
        <form  
            className={css.form}
            onSubmit={handelSubmit}>
        <label className={css.lable}>
        Name
        <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </label>
        <label className={css.lable}>
        Numder
        <input
            className={css.input}
            type="tel"
            name="number"
            maxLength="35"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        <button className={css.button} type="submit">Add contact</button>
        </form>
    )
}

export default ContactForm;