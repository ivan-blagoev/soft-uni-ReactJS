import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";



const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register() {

  const [errorMessage, setErrorMessage] = useState("");
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  async function handleSubmit() {
    try {
      setErrorMessage("");
      await registerSubmitHandler(values);
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    
    <div className="container-xxl py-5">
  <div className="container d-flex justify-content-center">
    <div className="row g-5 align-items-center">
      <section id="register-page" className="content auth">
        <form id="register" onSubmit={onSubmit} className="d-flex flex-column">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <div className="col-md-12" style={{marginBottom:"15px"}}>
            <div className="form-floating">
              <input
                className="form-control"
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                onChange={onChange}
                value={values[RegisterFormKeys.Email]}
              />
              <label htmlFor="email">Email:</label>
            </div>
          </div>

          <div className="col-md-12" style={{marginBottom:"15px"}}>
            <div className="form-floating">
              <input
                className="form-control"
                type="password"
                name="password"
                id="register-password"
                placeholder="Enter your password"
                onChange={onChange}
                value={values[RegisterFormKeys.Password]}
              />
              <label htmlFor="pass">Password:</label>
            </div>
          </div>

          <div className="col-md-12" style={{marginBottom:"15px"}}>
            <div className="form-floating">
              <input
              
                className="form-control"
                type="password"
                name="confirm-password"
                placeholder="Confirm your password"
                id="confirm-password"
                onChange={onChange}
                value={values[RegisterFormKeys.ConfirmPassword]}
              />
              <label htmlFor="con-pass">Confirm Password:</label>
            </div>
          </div>

          <div className="col-md-12" style={{marginBottom:"5px"}}>
            <input
              className="btn btn-primary w-100 py-3"
              type="submit"
              value="Register"
            />
            {errorMessage && <p className="text-danger mb-3" style={{alignContent:'center'}}>{errorMessage}</p>}
          </div>

          <p className="field" >
            <span>
              If you already have a profile click <a href="/login">here</a>
            </span>
          </p>
        </form>
      </section>
    </div>
  </div>
</div>

  );
}


