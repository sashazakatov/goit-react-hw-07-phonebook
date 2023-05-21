import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from './operations';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        isAdding: false,
        isDeleting: false,
        error: null,
    },
    extraReducers: (bilder) => {
        bilder
            .addCase(fetchContacts.pending, ( state ) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, ( state, actions ) => {
                state.isLoading = false;
                state.error = null;
                state.items = actions.payload;
            })
            .addCase(fetchContacts.rejected, ( state, actions ) => {
                state.isLoading = false;
                state.error = actions.payload;
            })
            .addCase(deleteContact.pending, ( state ) => {
                state.isDeleting = true;
            })
            .addCase(deleteContact.fulfilled, ( state, actions ) => {
                state.isDeleting = false;
                state.error = null;
                state.items = state.items.filter(({id}) => id !== actions.payload.id);
            })
            .addCase(deleteContact.rejected, ( state, actions ) => {
                state.isDeleting = false
                state.error = actions.payload;
            })
            .addCase( addContact.pending, ( state ) => {
                state.isAdding = true;
            })
            .addCase( addContact.fulfilled, (state, actions) => {
                state.isAdding = false;
                state.error = null;
                state.name = null;
                state.phone = null;
                state.items.push(actions.payload);
            })
            .addCase( addContact.rejected, ( state, actions ) => {
                state.isAdding = false;
                state.error = actions.payload;
            });
    }
})

export const contactsReducer = contactsSlice.reducer;