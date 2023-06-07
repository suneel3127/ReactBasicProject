import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { useEffect } from "react";
import {useSelector , useDispatch} from 'react-redux';
import {getAllContacts,getAsyncContacts} from "../../Redux/ContactsRedux/ContactsSlice"

function ContactList(){

  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAsyncContacts())
  },[])

  const renderContactCards = 
    allContacts.map(
        (contact)=>{
          return(
          <ContactCard key={contact.id} contact={contact}/>
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