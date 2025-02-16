import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
// import { FaRegUser, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { LoginAPI } from '../../APIs/api';
import { UserContext } from '../../UseContext/usecontext';

// Images
import Logo from "../../../Assets/images/logos/RAJLAXMI JAVIK PNG.png";
import SideImg from '../../../Assets/images/Login-img/img1.png';
import LoaderButton from '../../LoaderButton/loaderButton';
const Login = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const { navigate } = useNavigate();
    const { setUserLogin,setTokenContext } = useContext(UserContext);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        try {
            const payload = {
                email: data?.username,
                password: data?.password,
            };
            setLoading(true)
            // const response = (payload)
            const response = await LoginAPI(payload);

            reset();
            if (response?.data?.success) {
                setUserLogin(response?.data?.message);
                setTokenContext(response?.data?.accessToken)
                localStorage.setItem("userDetails", JSON.stringify(response));
                toast.success(response?.data?.message);
                setLoading(false);
                navigate("/"); // ✅ Use navigate instead of window.location
                // window.location = "/"
            }
            toast.error(response?.data?.message);
            setLoading(false)
        } catch (error) {
            toast.error(error?.response?.data?.message);
            setLoading(false);
        }
    };
    return (
        <>
            <div className='container-fluid bg-light-gradient min-vh-100'>
                <div className='row d-flex align-items-center justify-content-center pt-8'>
                    <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                        <div className='form-Side-Img'>
                            <h1 className='fw-bold text-success text-center mt-3'><span className='text-warning'>Welcome,</span> To RajLaxmi</h1>
                            <img className='mt-5 ms-2' src={SideImg} alt="" />
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                        {/* <div className="d-flex align-items-center justify-content-center shadow mt-5 w-100 z-1 position-relative"> */}
                        <div className="card auth-card mb-0 mx-3 shadow mt-5">
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
                                    <p className="mb-0 fs-5 px-3 d-inline-block bg-white text-dark z-1 position-relative">
                                        Login
                                    </p>
                                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className=" mb-3">
                                        <label>Email</label>

                                        <input
                                            type="text"
                                            className={`form-control ${errors.username ? "is-invalid" : ""
                                                }`}
                                            // placeholder="Enter  Email /Mobile Number"
                                            {...register("username", {
                                                required: "Email / Mobile Number is required",
                                            })}
                                        />
                                        {errors.username && (
                                            <div className="text-danger mt-1">
                                                {errors.username.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                            id="exampleInputPassword1"
                                            // placeholder='Enter  Password'
                                            {...register("password", {
                                                required: "Password is required",
                                            })}
                                        />
                                        {errors.password && (
                                            <div className="text-danger mt-1">
                                                {errors.password.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="d-md-flex align-items-center justify-content-end mb-4">

                                        <NavLink to={"/forgot"}
                                            className="text-primary fw-medium"
                                        >
                                            Forgot Password ?
                                        </NavLink>
                                    </div>

                                    <LoaderButton text={`Sign In`} styleClass={`btn btn-primary w-100 mb-4 rounded-pill`} loadingButtonStatus={loading} />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <p className="fs-4 mb-0 fw-medium">Don't have an account?</p>
                                        <NavLink to={"/register"}
                                            className="text-primary fw-medium ms-2"
                                        >
                                            Create account
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

export default Login;
