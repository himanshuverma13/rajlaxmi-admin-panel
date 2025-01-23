import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Product from '../../Pages/Product/product';
import Home from '../../Pages/Home/home';
import ProductDetails from '../../Pages/Product/productdetails';
import Order from '../../Pages/Order/order';

const RouterRoutes = () => {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/order" element={<Order />} />

            </Routes>
        // </Router>
    );
};

export default RouterRoutes;
