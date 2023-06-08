import React from "react";
import { Link , useNavigate} from "react-router-dom";
import user from "../../images/user.png";
import api from "../../API/axios";
import {useSelector , useDispatch} from 'react-redux';
import {getAsyncContacts} from "../../Redux/ContactsRedux/ContactsSlice";
import { useDeleteContactMutation } from "../../API/rtkQueryApi";

const ContactCard = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [deleteContact] = useDeleteContactMutation()

  const delContact =  async (id) =>{
    await deleteContact(id)
    dispatch(getAsyncContacts())

  }
  const edit =  (id) =>{
    navigate(`/contactmanager/editcontact/${id}`)
  }

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
          <div className="header">{props.contact.name}</div>
          <div>{props.contact.email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={()=>{delContact(props.contact.id)}}
        
      ></i>
      
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px" }}
          onClick={()=>{edit(props.contact.id)}}
        ></i>
    </div>
  );
};

export default ContactCard;
