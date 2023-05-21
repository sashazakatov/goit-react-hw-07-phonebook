import css from './ContactList.module.css'
import { useSelector, useDispatch } from "react-redux";
import { selectFiltedItems, selectIsDeleting } from 'store/selectors';
import { fetchContacts } from "store/operations";
import { useEffect, useState } from 'react';

import { deleteContact } from 'store/operations'; 

import Loader from 'components/Loader';

const ContactList = () => {;
    const filtredItems = useSelector(selectFiltedItems);
    const isDeleting = useSelector(selectIsDeleting)
    const dispatch = useDispatch();
    const [ activeId, setActiveId] = useState(null);

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
                    className={css.button}
                    type="button" 
                    onClick={()=>{
                            setActiveId(id);
                            dispatch(deleteContact(id));
                        }
                    }
                >
                    Delete
                    {   isDeleting && 
                        id === activeId && 
                        <Loader width={15}/>
                    }
                </button>
            </li>)
        }
        </ul>
    )
}

export default ContactList;