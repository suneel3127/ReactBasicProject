import React from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../../Context/userContext";
import {Link , useNavigate} from "react-router-dom"

const LoginForm = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();
  const {logIn} = useUserContext()
  const onSubmit = (data) => {
    logIn(data);
    navigate("/home/contactlist");
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} >
        <h1>Login</h1>
        <div className="ui divider"></div>
        <div className="ui form">
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
        <hr></hr>
        <p>Dont have an Account?? <Link to="/signup">Sign Up</Link></p>
      </form>
      
    </div>
  );
};

export default LoginForm;