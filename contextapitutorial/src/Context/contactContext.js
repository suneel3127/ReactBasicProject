import { createContext,useContext,useState } from "react";

export const contactContext = createContext({
    contacts:null,
    addContacts : () => {},
    delContacts : ()=>{},
    editContacts:()=>{}
})

export function ContactContextProvider({children}){
    const [contacts,setContacts] = useState([])

    const addContacts=(contact)=>{
        setContacts([...contacts,contact])
    }

    const delContacts = (id)=>{
        const newContactsList = contacts.filter((contact)=>{
            return contact.id != id
        })
        setContacts(newContactsList)
    }
    const editContacts = (id)=>{

    }

    return (
        <contactContext.Provider value={{contacts,setContacts,addContacts,delContacts,editContacts}}>
            {children}
        </contactContext.Provider>
    )
}

export function useContactContext(){
    const {contacts,setContacts, addContacts,delContacts,editContacts} = useContext(contactContext)
    return {contacts,setContacts, addContacts,delContacts,editContacts}
}