import axios from 'axios';
import React, { useRef } from 'react';
import { FloatingLabel, Form } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from "../../assets/images/logo.png";


const Registration = () => {

  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();

      const user = {
          name: name.current.value,
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
      };

      try {
          await axios.post("https://booking-app-api-bvpw.onrender.com/api/auth/register", user);

          toast.success("Successfully Registered");

          navigate("/signin");

      } catch (err) {
        toast.error("There is something wrong");
          console.log(err);
      }
  };

  return (
      <div className="">
          <div className="login-section">
              <div className="container">
                  <div className="row">
                      <div className='d-flex justify-content-center align-items-center vh-100'>
                          <div className="p-5 login-form login-form-wrapper shadow-lg rounded-3 w-50">
                              <div className="text-center">
                                  <div className="field-wrapper">
                                      <Link to="/">
                                          <img src={Logo} alt="logo" className="img-fluid text-center" />
                                      </Link>
                                      <h3 className="my-4">Registration Form</h3>

                                      <form onSubmit={handleSubmit}>
                                          <FloatingLabel controlId="name" label="Name" className="mb-3">
                                              <Form.Control type="text" placeholder="Enter Your Name ... " ref={name} />
                                          </FloatingLabel>
                                          <FloatingLabel controlId="email" label="Email" className="mb-3">
                                              <Form.Control type="email" placeholder="Enter Your Name ... " ref={email} />
                                          </FloatingLabel>
                                          <FloatingLabel controlId="userName" label="User Name" className="mb-3">
                                              <Form.Control type="text" placeholder="Enter Your user name ... " ref={username} />
                                          </FloatingLabel>

                                          <FloatingLabel controlId="password" label="Password" className="mb-3">
                                              <Form.Control type="password" placeholder="Enter Your user name ... " ref={password} />
                                          </FloatingLabel>

                                          <button type="submit" className="headerBtn banner-btn mt-3 w-100">
                                              Registration
                                          </button>
                                      </form>

                                      <p className="ff-inter text-clr-dark-3 fs-14 lh-22 mt-4">
                                          Already have an account?{" "}
                                          <Link to="/signin" className="signup-btn fw-semiBold">
                                              Login
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

export default Registration;