import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import {useGetAllContactsQuery} from "../../API/rtkQueryApi";

function ContactList(){

  const {data:allContacts,error,isLoading,isSuccess} = useGetAllContactsQuery();
  const renderContactCards = 
    allContacts?.map(
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
        <Link to="/contactmanager/addcontact">
          <p className="addContactButton">Add Contact</p>
        </Link>
        </div>
        <div className="ui celled list">{renderContactCards}</div>
        
      </div>
  )
}
export default ContactList