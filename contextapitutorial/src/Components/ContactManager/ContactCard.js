import React from "react";
import { Link ,useNavigate } from "react-router-dom";
import user from "../../images/user.png";
import { useContactContext } from "../../Context/contactContext";
import api from "../../API/axios";

const ContactCard = (props) => {
  const {delContacts} = useContactContext()
  const navigate = useNavigate()

  const delContact =  async (id) =>{
    await api.delete(`/contacts/${id}`)
    delContacts(id);
  }
  const edit =  (id) =>{
    navigate("/home/editcontact/",{
      state:{
          id
        },
    })
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
