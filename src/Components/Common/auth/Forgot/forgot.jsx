import React, { useState } from "react";
import { useForm } from "react-hook-form"; // React Hook Form
import { FaRegUser, FaLock } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ForgotAPI, ResetAPI } from "../../APIs/api"; // Import APIs
import { toast } from "react-toastify";

// Images
import Logo from "../../../Assets/images/logos/RAJLAXMI JAVIK PNG.png";
import SideImg from '../../../Assets/images/Login-img/img1.png';
import LoaderButton from "../../LoaderButton/loaderButton";

const Forgot = () => {
    const [step, setStep] = useState(1); // Step 1: Input email/mobile, Step 2: Input OTP
    const [userData, setUserData] = useState(null); // To store user email/mobile temporarily
        const [loading, setLoading] = useState(false);
    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate()

    // Step 1: Send OTP
    const handleSendOtp = async (data) => {
        setUserData(data); // Store user data temporarily
        try {
            setLoading(true)
            const payload = {
                email: data.email,
            };
            const response = await ForgotAPI(payload);
            if (response?.message == "OTP sent your email successfully.") {
                toast?.success(response?.message)
                setStep(2); // Move to OTP verification step
                setLoading(false);
            } else {
                toast?.error(response?.message)
                setLoading(false);

            }
        } catch (error) {
            toast?.error(error?.response?.message)
            setLoading(false);

        }
    };

    // Step 2: Verify OTP
    const handleVerifyOtp = async (data) => {
        try {
            setLoading(true);

            const payload = {
                otp: Number(data?.otp),
                newPassword: data?.password,
            };
            const response = await ResetAPI(payload);
            console.log('response?.message: ', response?.message?.message);
            if (response?.message?.message == "Password reset sucessfully") {
                toast?.success(response?.message?.message)
                setLoading(false);

                navigate('/login')
            } else {
                toast?.error(response?.message)
                setLoading(false);

            }
        } catch (error) {
            toast?.error(error?.response?.message)
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
                                        Forgot
                                    </p>
                                    <span className="border-top w-100 position-absolute top-50 start-50 translate-middle" />
                                </div>
                                <form className="pt-3"
                                    onSubmit={handleSubmit(
                                        step === 1
                                            ? handleSendOtp
                                            : step === 2
                                                ? handleVerifyOtp
                                                : null
                                    )}>
                                    {step === 1 && (
                                        <div className="form-group mb-4">
                                            <label>Email</label>

                                            <input
                                                type="text"
                                                className={`form-control ${errors?.username ? "is-invalid" : ""
                                                    }`}
                                                placeholder="Email / Mobile Number"
                                                {...register("email", {
                                                    required: "Email / Mobile Number is required",
                                                })}
                                            />
                                            {errors?.email && (
                                                <div className="text-danger mt-1">
                                                    {errors?.email?.message}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {step === 2 && (
                                        <>
                                            <div className="form-group">
                                                <label>OTP</label>

                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.otp ? "is-invalid" : ""
                                                        }`}
                                                    placeholder="Enter OTP"
                                                    {...register("otp", {
                                                        required: "OTP is required",
                                                    })}
                                                />
                                                {errors.otp && (
                                                    <div className="text-danger mt-1">
                                                        {errors.otp.message}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="form-group">
                                                <label>New Password</label>

                                                <input
                                                    type="password"
                                                    className={`form-control ${errors.password ? "is-invalid" : ""
                                                        }`}
                                                    placeholder="Enter new password"
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

                                            <div className="form-group">
                                                <label>Confirm Password</label>
                                                <input
                                                    type="password"
                                                    className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
                                                        }`}
                                                    placeholder="Confirm new password"
                                                    {...register("confirmPassword", {
                                                        required: "Confirm password is required",
                                                        validate: (value) =>
                                                            value === watch("password") ||
                                                            "Passwords do not match",
                                                    })}
                                                />
                                                {errors.confirmPassword && (
                                                    <div className="text-danger mt-1">
                                                        {errors.confirmPassword.message}
                                                    </div>
                                                )}
                                            </div>
                                        </>
                                    )}
                                    {/* <button
                                        type='submit'
                                        className="btn btn-primary w-100 mb-4 mt-3 rounded-pill"
                                    >
                                        {step === 1
                                            ? "Send OTP"
                                            : step === 2
                                                ? "Reset Password"
                                                : ""}
                                    </button> */}
                                    <LoaderButton text={step === 1
                                            ? "Send OTP"
                                            : step === 2
                                                ? "Reset Password"
                                                : ""} styleClass={`btn btn-primary w-100 mb-4 mt-3 rounded-pill`} loadingButtonStatus={loading} />
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
    );
};

export default Forgot;
