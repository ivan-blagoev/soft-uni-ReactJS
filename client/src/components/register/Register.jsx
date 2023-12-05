import { useContext } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirm-password",
};

export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.ConfirmPassword]: "",
  });

  return (
    
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
              <div className="row g-3">
                <div className="brand-logo"></div>
                <h1>Register</h1>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={onChange}
                      values={values[RegisterFormKeys.Email]}
                    />

                    <label htmlFor="email">Email:</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      id="register-password"
                      placeholder="Enter your password"
                      onChange={onChange}
                      values={values[RegisterFormKeys.Password]}
                    />

                    <label htmlFor="pass">Password:</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="password"
                      name="confirm-password"
                      placeholder="Confirm your password"
                      id="confirm-password"
                      onChange={onChange}
                      values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                    <label htmlFor="con-pass">Confirm Password:</label>
                  </div>
                </div>

                <input
                  className="btn btn-primary w-100 py-3"
                  type="submit"
                  value="Register"
                />

                <p className="field">
                  <span>
                    If you already have profile click <a href="/login">here</a>
                  </span>
                </p>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
