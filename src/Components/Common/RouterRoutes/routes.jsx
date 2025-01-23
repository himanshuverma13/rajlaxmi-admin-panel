import React from 'react';
import {  Routes, Route } from "react-router-dom";
import Product from '../../Pages/Product/product';
import Home from '../../Pages/Home/home';
import ProductDetails from '../../Pages/Product/productdetails';

const RouterRoutes = () => {
    return (
        // <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/productdetails" element={<ProductDetails />} />

            </Routes>
        // </Router>
    );
};

export default RouterRoutes;
