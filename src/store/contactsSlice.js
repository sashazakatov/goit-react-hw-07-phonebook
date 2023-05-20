import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact, addContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null
    },
    extraReducers: (bilder) => {
        bilder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, actions) => {
                state.isLoading = false;
                state.error = null;
                state.items = actions.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, actions) => {
                state.isLoading = false;
                state.error = null;
                state.items = state.items.filter(({id}) => id !== actions.payload.id);
            })
            .addCase(deleteContact.rejected, handleRejected)
            .addCase( addContact.pending, handlePending)
            .addCase( addContact.fulfilled, (state, actions) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(actions.payload);
            })
            .addCase( addContact.rejected, handleRejected);
    }
})

// extraReducers:{
//     [fetchContacts.pending](state){
//         state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, actions){
//         state.isLoading = false;
//         state.error = null;
//         state.items = actions.payload;
//     },
//     [fetchContacts.rejected](state, actions){
//         state.isLoading = false;
//         state.error = actions.payload;
//     },
//     [deleteContact.pending](state){
//         state.isLoading = true;
//     },
//     [deleteContact.fulfilled](state, actions){
//         state.isLoading = false;
//         state.error = null;
//         state.items = state.items.filter(({id}) => id !== actions.payload.id);
//     },
//     [deleteContact.rejected](state, actions){
//         state.isLoading = false;
//         state.error = actions.payload;
//     },
//     [addContact.pending](state){
//         state.isLoading = true;
//     },
//     [addContact.fulfilled](state, actions){
//         state.isLoading = false;
//         state.error = null;
//         state.items.push(actions.payload);
//     },
//     [addContact.rejected](state, actions){
//         state.isLoading = false;
//         state.error = actions.payload;
//     },
// }

export const contactsReducer = contactsSlice.reducer;