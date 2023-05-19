import axios from 'axios';
import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/logo.png";
import useAuth from '../../hooks/AuthContext';

const Login = () => {

   const [credentials, setCredentials] = useState({
       email: undefined,
       password: undefined,
   });

    const { loading, error, dispatch } = useAuth();
    
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || "/";


     console.log(location.state);
    

   const handleChange = (e) => {
       setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleSubmit = async (e) => {
       e.preventDefault();

       dispatch({ type: "LOGIN_START" });

       try {
           const res = await axios.post("https://booking-app-api-bvpw.onrender.com/api/auth/login", credentials);

           dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
          

           if (res?.data?.details?.email) {
               
               navigate(from, { replace: true });
           }

           if (res?.data?.details?.isAdmin) {
             navigate("/admin/dashboard");
           }
       } catch (err) {
           dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
       }
   };

  return (
      <div className="">
          <div className="login-section">
              <div className="container">
                  <div className="row">
                      <div className="d-flex justify-content-center align-items-center vh-100">
                          <div className="p-5 login-form login-form-wrapper shadow-lg rounded-3 w-50">
                              <div className="text-center">
                                  <div className="field-wrapper">
                                      <Link to="/">
                                          <img src={Logo} alt="logo" className="img-fluid text-center" />
                                      </Link>
                                      <h3 className="my-4">Login Form</h3>

                                      <form onSubmit={handleSubmit}>
                                          <FloatingLabel controlId="email" label="Email" className="mb-3">
                                              <Form.Control type="email" placeholder="Enter Your Name ... " onChange={handleChange} />
                                          </FloatingLabel>

                                          <FloatingLabel controlId="password" label="Password" className="mb-3">
                                              <Form.Control type="password" placeholder="Enter Your user name ... " onChange={handleChange} />
                                          </FloatingLabel>

                                          <button type="submit" className="headerBtn banner-btn mt-3 w-100" disabled={loading}>
                                              Login
                                          </button>
                                      </form>

                                      <p className="ff-inter text-clr-dark-3 fs-14 lh-22 mt-4">
                                          Don't have an account?{" "}
                                          <Link to="/registration" className="signup-btn fw-semiBold">
                                              Sign up
                                          </Link>
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Login;