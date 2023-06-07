import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from "../ContactsRedux/ContactsSlice"

const ContactsStore = configureStore({
    reducer:{
        contacts:ContactsReducer
    },
})

export default ContactsStore