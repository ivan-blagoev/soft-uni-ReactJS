import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";


const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    return (


        <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <form id="login" onSubmit={onSubmit}>

              <div className="brand-logo"></div>
                  <h1>Login</h1>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                    <input
                        className="form-control"
                        type="email"
                        id="email"
                        name={LoginFormKyes.Email}
                        
                        onChange={onChange}
                        value={values[LoginFormKyes.Email]}
                    />
                      <label htmlFor="email">Email:</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                    <input
                        className="form-control"
                        type="password"
                        id="login-password"
                        name={LoginFormKyes.Password}
                        onChange={onChange}
                        value={values[LoginFormKyes.Password]}
                    />
                      <label htmlFor="login-pass">Password:</label>
                    </div>
                  </div>        
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




    );
}
