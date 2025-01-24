import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Product from '../../Pages/Product/product';
import Home from '../../Pages/Home/home';
import ProductDetails from '../../Pages/Product/productdetails';
import Order from '../../Pages/Order/order';
import ProductEdit from '../../Pages/Product/productedit';
import ContactInfo from '../../Pages/ContactInfo/contactinfo';
import UserInfo from '../../Pages/UserInfo/userinfo';
import ProductCreate from '../../Pages/Product/productcreate';
import Login from '../auth/Login/login';
import Registration from '../auth/Registration/registration';
import Feedback from '../../Pages/Feedback/feedback';

const RouterRoutes = () => {
    return (
        // <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/productedit" element={<ProductEdit />} />
                <Route path="/productcreate" element={<ProductCreate />} />
                <Route path="/order" element={<Order />} />
                <Route path="/contactinfo" element={<ContactInfo />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/feedback" element={<Feedback />} />



            </Routes>
        // </Router>
    );
};

export default RouterRoutes;
