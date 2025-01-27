import React, { useState } from 'react'

import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
// import { RegisterAPI } from "../APIs/api";
import { toast } from "react-toastify";
import { RegisterAPI } from '../../APIs/api';

// Images
import Logo from "../../../Assets/images/logos/RAJLAXMI JAVIK PNG.png";
import SideImg from '../../../Assets/images/Login-img/img1.png';
import LoaderButton from '../../LoaderButton/loaderButton';
const Registration = () => {
    const {
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    
  // Watch the values of password and confirmPassword
  const password = watch("password");

  const onSubmit = async (data) => {

    try {
        setLoading(true)
      const payload = {
        full_name: data?.username,
        email: data?.email,
        password: data?.password,
        mobile_number: data?.mobile,
        role: "admin"
      };
      const response = await RegisterAPI(payload);
      console.log('response: ', response);
      if (response?.message) {
        toast.success(response?.data?.message)
        setLoading(false)
        window.location = "/login"
      }
      reset();
    } catch (error) {
      toast?.error(error?.response?.data?.message)
      setLoading(false)
    }
  };
    return (
        <>
            <div className='container-fluid bg-light-gradient vh-100'>
                <div className='row d-flex align-items-center justify-content-center pt-3'>
                    <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                           <div className='Form-Side-Img'>
                                               <h1 className='fw-bold text-success text-center mt-3'><span className='text-warning'>Welcome,</span> To RajLaxmi</h1>
                                               <img className='mt-5 ms-2' src={SideImg} alt="" />
                                           </div>
                                       </div>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        {/* <div className="d-flex align-items-center justify-content-center shadow mt-5 w-100 z-1 position-relative"> */}
                        <div className="card auth-card  mb-0 mx-3 shadow mt-2">
                            <div className="card-body pt-5">
                                <div
                                    className="text-nowrap logo-img text-center d-flex align-items-center justify-content-center mb-3 w-100"
                                >
                                    <img
                                        src={Logo}
                                        className="dark-logo"
                                        alt="Logo-light"
                                    />
                                </div>

                                <div className="position-relative text-center my-4">
                                    <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-1 position-relative">
                                        Registration
                                    </p>
                                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <form className='row' onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-lg-6 mb-2">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            {...register("username", {
                                                required: "Username is required",
                                            })}
                                        />
                                        {errors.username && (
                                            <p className="text-danger">
                                                {errors.username.message}
                                            </p>
                                        )}
                                    </div>
                                   
                                    <div className="col-lg-6 mb-2">
                                        <label htmlFor="exampleInputPassword3" className="form-label">
                                            Mobile No.
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="exampleInputPassword3"
                                            {...register("mobile", {
                                                required: "Mobile number is required",
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: "Enter a valid 10-digit mobile number",
                                                },
                                            })}
                                        />
                                        {errors.mobile && (
                                            <p className="text-danger">{errors.mobile.message}</p>
                                        )}
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <label htmlFor="exampleInputPassword2" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputPassword2"
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: {
                                                    value:
                                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Enter a valid email",
                                                },
                                            })}
                                        />
                                        {errors.email && (
                                            <p className="text-danger">{errors.email.message}</p>
                                        )}
                                    </div>
                                    <div className="col-lg-12 mb-2">
                                        <label htmlFor="exampleInputPassword4" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword4"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "Password must be at least 6 characters",
                                                },
                                            })}
                                        />
                                        {errors.password && (
                                            <p className="text-danger">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="exampleInputPassword4" className="form-label">
                                          Confirm  Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword4"
                                            {...register("confirmPassword", {
                                                required: "Please confirm your password",
                                                validate: (value) =>
                                                    value === password || "Passwords do not match",
                                            })}
                                        />
                                        {errors.confirmPassword && (
                                            <p className="text-danger">
                                                {errors.confirmPassword.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* <button
                                        type='submit'
                                        className="btn btn-primary w-100 mb-4 rounded-pill"
                                    >
                                        Sign Up
                                    </button> */}
                                    <LoaderButton text={`Sign Up`} styleClass={`btn btn-primary w-100 mb-4 rounded-pill`} loadingButtonStatus={loading} />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-medium">Already have an account?</p>
                                        <NavLink to={"/login"}
                                            className="text-primary fw-medium ms-2"
                                        >
                                            Sign In
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* </div> */}

                    </div>
                </div>

            </div>
        </>
    )
}

export default Registration;
