import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: JSON.parse(localStorage.getItem('contacts')) ?? [] ,
    reducers:{
        addTask:{
            reducer(state, action){
                state.push(action.payload);
            },
            prepare({name, number}){
                return{
                    payload:{
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        removeTask(state, action){
            return state.filter(({id}) => id !== action.payload);
        }
    },
});

export const { addTask, removeTask } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;