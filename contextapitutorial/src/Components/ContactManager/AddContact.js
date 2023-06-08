import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import { useAddContactsMutation } from "../../API/rtkQueryApi";

function AddContact(){
    const { register,formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();

    const [addContact] = useAddContactsMutation()

    const onSubmit = async (data) =>{
        const request={
          id:Math.ceil(Math.random()*1000),
          ...data
        }
         await addContact(request)
         navigate("/contactmanager")
    }

    return(
        <div className="login">
        <form onSubmit={handleSubmit(onSubmit)}>
           <h1>Add Contact</h1>
            <div className="ui divider"></div>
            <div className="ui form">
            <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
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
              {...register('email', { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="errorMsg">Email is required.</p>)}
          </div>
          
          <button className="fluid ui button blue">Add</button>
        </div>
      </form>
    </div>
    )
}
export default AddContact