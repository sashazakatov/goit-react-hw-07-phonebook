import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { selectorItem, selectorFilter } from 'store/selectors';
import { fetchContacts } from "store/operations";
import { useEffect } from 'react';

import { deleteContact } from 'store/operations';

const ContactList = () => {

    const items = useSelector(selectorItem);
    const filter = useSelector(selectorFilter);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
      }, [dispatch]);

    return(
        <ul className={css.list}>
        {
            items
            .filter(({name}) => name.toLowerCase().includes(filter.toLowerCase()))
            .map(({id, name, phone}) => 
            <li className={css.item} key={id}>
                <p>{name}: {phone}</p>
                <button 
                    type="button" 
                    onClick={()=>
                        {dispatch(deleteContact(id))}
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