import css from './ContactForm.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { selectItems, selectIsAdding } from 'store/selectors'

import { RotatingLines } from  'react-loader-spinner'

import { addContact } from 'store/operations';

const ContactForm = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectItems);
    const isAdding = useSelector(selectIsAdding);

    const isContactExists = (value) => {
        return contacts.find(({name}) => name.toLowerCase() === value.toLowerCase());
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const {name, phone} = e.target.elements;

        if(isContactExists(name.value)){
            alert(`${name.value} is already in contacts`);
            return;
        }
        dispatch(addContact({ name: name.value, phone: phone.value })).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
              form.reset();
            }
        });
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
            name="phone"
            maxLength="35"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </label>
        <button className={css.button} type="submit">
            Add contact
            {isAdding && 
                <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="15"
                    visible={true}
            />} 
        </button>
        </form>
    )
}

export default ContactForm;