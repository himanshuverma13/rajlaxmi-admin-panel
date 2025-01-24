import React, { useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "../../Pages/Product/product";
import Home from "../../Pages/Home/home";
import ProductDetails from "../../Pages/Product/productdetails";
import Order from "../../Pages/Order/order";
import ProductEdit from "../../Pages/Product/productedit";
import ContactInfo from "../../Pages/ContactInfo/contactinfo";
import UserInfo from "../../Pages/UserInfo/userinfo";
import ProductCreate from "../../Pages/Product/productcreate";
import Login from "../auth/Login/login";
import Registration from "../auth/Registration/registration";
import Feedback from "../../Pages/Feedback/feedback";
import { UserContext } from "../UseContext/usecontext";
import Forgot from "../auth/Forgot/forgot";

const RouterRoutes = () => {
  const { setUserLogin, UserLogins } = useContext(UserContext);
  console.log("UserLogins: ", UserLogins);
  useEffect(() => {
    let getvalue = JSON.parse(localStorage.getItem("userDetails") ?? "[]");
    console.log("getvalue: ", getvalue);
    setUserLogin(getvalue?.data?.message);
  }, []);

  return (
    <Routes>
      {!UserLogins ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/productedit" element={<ProductEdit />} />
          <Route path="/productcreate" element={<ProductCreate />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contactinfo" element={<ContactInfo />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};

export default RouterRoutes;
