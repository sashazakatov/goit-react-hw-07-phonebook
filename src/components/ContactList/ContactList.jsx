import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from 'store/contactsSlice';
import { getContacts, getFilter } from 'store/selectors';


const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    return(
        <ul className={css.list}>
        {
            contacts
            .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, name, number}) => 
            <li className={css.item} key={id}>
                <p>{name}: {number}</p>
                <button 
                    type="button" 
                    onClick={()=>
                        {dispatch(removeTask(id))}
                    }
                >
                    Delete
                </button>
            </li>)
        }
        </ul>
    )
}

export default ContactList;