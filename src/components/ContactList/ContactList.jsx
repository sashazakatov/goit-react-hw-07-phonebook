import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { selectFiltedItems } from 'store/selectors';
import { fetchContacts } from "store/operations";
import { useEffect } from 'react';

import { deleteContact } from 'store/operations';

const ContactList = () => {;
    const filtredItems = useSelector(selectFiltedItems);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
      }, [dispatch]);

    return(
        <ul className={css.list}>
        {
            filtredItems
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