import React from "react";
import { useForm } from "react-hook-form";
import {Link , useNavigate} from "react-router-dom"
import { useUserContext } from "../../Context/userContext";

function SignUp(){
    const { register,formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const {addUserData}=useUserContext()
    const onSubmit = (data) => {
        addUserData(data)
        navigate("/")
      };
    return(
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1>Sign Up</h1>
        <div className="ui divider"></div>
        <div className="ui form">
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
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register('username', { required: true })}
            />
            {errors.username && errors.username.type === "required" && (
                <p className="errorMsg">UserName is required.</p>)}
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
            {errors.password && errors.password.type === "required" && (
              <p className="errorMsg">Password is required.</p>)}
          </div>
          
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
    )
}
export default SignUp