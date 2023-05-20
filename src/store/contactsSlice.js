import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from './operations';


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers:{
        [fetchContacts.pending](state){
            state.isLoading = true;
        },
        [fetchContacts.fulfilled](state, actions){
            state.isLoading = false;
            state.error = null;
            state.items = actions.payload;
        },
        [fetchContacts.rejected](state, actions){
            state.isLoading = false;
            state.error = actions.payload;
        },
        [deleteContact.pending](state){
            state.isLoading = true;
        },
        [deleteContact.fulfilled](state, actions){
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(({id}) => id !== actions.payload.id);
        },
        [deleteContact.rejected](state, actions){
            state.isLoading = false;
            state.error = actions.payload;
        },
        [addContact.pending](state){
            state.isLoading = true;
        },
        [addContact.fulfilled](state, actions){
            state.isLoading = false;
            state.error = null;
            state.items.push(actions.payload);
        },
        [addContact.rejected](state, actions){
            state.isLoading = false;
            state.error = actions.payload;
        },
    }
})

export const contactsReducer = contactsSlice.reducer;