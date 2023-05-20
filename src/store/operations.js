import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
    async ( _, thunkAPI) => {
        try{
            const respons = await axios.get('https://64690068183682d614379841.mockapi.io/contacts');
            return respons.data;
        } catch (e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const addContact = createAsyncThunk('contacts/addContact', async ( {name, phone}, thunkAPI) => {
    try{
        const respons = await axios.post('https://64690068183682d614379841.mockapi.io/contacts',{
            name,
            phone,
        })
        return respons.data;
    }catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
})
export const deleteContact = createAsyncThunk('contacts/deleteContact', async ( id, thunkAPI ) => {
    try{
        const respons = await axios.delete(`https://64690068183682d614379841.mockapi.io/contacts/${id}`);
        return respons.data;
    }catch (e){
        return thunkAPI.rejectWithValue(e.message);
    }
})