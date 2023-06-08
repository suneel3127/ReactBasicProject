import { configureStore } from '@reduxjs/toolkit';
import ContactsReducer from "../ContactsRedux/ContactsSlice"
import { rtkQueryApi } from '../../API/rtkQueryApi';

const ContactsStore = configureStore({
    reducer:{
        contacts:ContactsReducer,
        [rtkQueryApi.reducerPath]:rtkQueryApi.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(rtkQueryApi.middleware)
})

export default ContactsStore