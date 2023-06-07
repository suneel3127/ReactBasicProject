import {createSlice, createAsyncThunk} from  '@reduxjs/toolkit';
import axios from "../../API/axios";

export const getAsyncContacts = createAsyncThunk('contacts/getAsyncContacts' , async()=>{
    const response = await axios.get("/Contacts");
    return response.data
})

const ContactsSlice = createSlice({
    name:'contacts',
    initialState:{
        allContacts:[],
        selectedContacts:{}
    },
    reducers:{
        setAllContacts:(state,{payload})=>{
            state.allContacts = payload
        },
        setSelectedContacts:(state,{payload})=>{
            state.selectedContacts = payload
        }
    },
    extraReducers:{
        [getAsyncContacts.pending]:()=>{
            console.log('Pending')
        },
        [getAsyncContacts.fulfilled]:(state,{payload})=>{
            console.log('Data Fetched')
            return{...state,allContacts:payload}
        },
        [getAsyncContacts.rejected]:()=>{
            console.log('Rejected')
        }
    }
})

export const {setAllContacts, setSelectedContacts} = ContactsSlice.actions
export default ContactsSlice.reducer

export const getAllContacts=(state)=>state.contacts.allContacts
export const getSelectedContact = (state)=>state.contacts.selectedContacts