import { useForm } from "react-hook-form";
import { useContactContext } from "../../Context/contactContext";
import { useNavigate ,useLocation} from "react-router-dom";
import { useEffect, useState } from "react";

function EditContact(){
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {contacts,editContacts} = useContactContext();
    const [editableContact,setEditableContact] = useState([{name:"",email:""}]);
    const [renderemail,setRenderEmail] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
   
    useEffect(()=>{
      
      const id = location.state.id
       setEditableContact(contacts.filter((contact)=>contact.id==id)[0])
    },[])
    
   
    const onSubmit =  (data) =>{
      console.log(editableContact)
      //editContacts(editableContact)
        navigate("/home/contactlist")
    }

    return(
        <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
           <h1>Edit Contact</h1>
            <div className="ui divider"></div>
            <div className="ui form">
            <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={editableContact.name}
              onchange = {(e)=>{
                e.preventDefault();
                setEditableContact({name:e.target.value,email:editableContact.email})
                }
              }
              {...register('name', { required: true })}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="errorMsg">Name is required.</p>)}
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editableContact.email}
              onchange = {(e)=>{
                e.preventDefault();
                setEditableContact({name:editableContact.name,email:e.target.value})
                }
              }
              {...register('email', { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>)}
          </div>
          
          <button className="fluid ui button blue">Edit</button>
        </div>
      </form>
    </div>
    )
}
export default EditContact