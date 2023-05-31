import { Link } from "react-router-dom";
import { useContactContext } from "../../Context/contactContext";
import ContactCard from "./ContactCard";
import { useEffect } from "react";
import axios from "../../API/axios"

function ContactList(){
  const {contacts, setContacts} = useContactContext()

  const getContactsApi = async () =>{
   
    const response = await axios.get("/Contacts");
    return response.data

  }
  useEffect(()=>{
    const getAllContacts = async ()=>{
      const allContacts = await getContactsApi()
      if(allContacts){
      setContacts(allContacts)
      }
    }
    getAllContacts()
  },[])

    
    const renderContactCards = 
      contacts.map(
        (contact)=>{
          console.log(contact)
          return(
          <ContactCard contact={contact}/>
          )
        }
      )
    
    return(
        <div className="contactList">
        <div className="contactListHeader">
        <h3>
          Contact List
        </h3>
        <Link to="/home/addcontact">
          <p className="addContactButton">Add Contact</p>
        </Link>
        </div>
        <div className="ui celled list">{renderContactCards}</div>
        
      </div>
    )
}
export default ContactList