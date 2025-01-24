import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';
import { useForm } from "react-hook-form";
const ProductCreate = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-navbarbg="skin6"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                {/* Sidebar Start */}
                <Sidebar />
                {/*  Sidebar End */}
                {/*  Main wrapper */}
                <div className="body-wrapper">
                    <div className="container-fluid">
                        <Navbar />

                        <form action="">
                            <div className="card p-4">
                                <h5>Product Details</h5>
                                {/* <small className="text-muted">Title, short description, image...</small> */}

                                <div className="mb-3 mt-3">
                                    <label for="productName" className="form-label">Product Name</label>
                                    <input type="text" className="form-control" id="product_name" placeholder="Product name"
                                        {...register("product_name", {
                                            required: "Name is required",
                                        })} />
                                    {errors.product_name && (
                                        <span className="text-danger">
                                            {errors.product_name.message}
                                        </span>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label for="product_description" className="form-label">Product Description</label>
                                    <textarea className="form-control" id="product_description" rows="3" placeholder="Description"
                                        {...register("product_description", {
                                            required: "Description is required",
                                        })}
                                    ></textarea>
                                    {errors.product_description && (
                                        <span className="text-danger">
                                            {errors.product_description.message}
                                        </span>
                                    )}
                                </div>


                            </div>
                            <div className='card p-4'>
                                {/* <h1 class="mb-4">Product Form</h1> */}

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="form-group mb-2">
                                                    <label for="product_price">Price</label>
                                                    <input type="number" className="form-control" id="product_price" placeholder="Enter price"
                                                        {...register("product_price", {
                                                            required: "Price is required",
                                                            min: { value: 1, message: "Price must be positive" },
                                                        })} />
                                                    {errors.product_price && (
                                                        <span className="text-danger">
                                                            {errors.product_price.message}
                                                        </span>
                                                    )}
                                                </div>

                                                <div className="form-group mb-2">
                                                    <label for="product_stock">Stock</label>
                                                    <input type="number" className="form-control" id="product_stock" placeholder="Enter price"
                                                        {...register("product_stock", {
                                                            required: "Stock is required",
                                                            min: {
                                                                value: 0,
                                                                message: "Stock cannot be negative",
                                                            },
                                                        })} />
                                                    {errors.product_stock && (
                                                        <span className="text-danger">
                                                            {errors.product_stock.message}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label for="product_category">Category</label>
                                                    <input type="text" className="form-control" id="product_category" placeholder="Enter product code"
                                                        {...register("product_category", {
                                                            required: "Category is required",
                                                        })}
                                                    />
                                                    {errors.product_category && (
                                                        <span className="text-danger">
                                                            {errors.product_category.message}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label for="product_quantity">Quantity</label>
                                                    <input type="number" className="form-control" id="product_quantity"
                                                        {...register("product_quantity", {
                                                            required: "Quantity is required",
                                                            min: {
                                                                value: 1,
                                                                message: "Quantity must be positive",
                                                            },
                                                        })} />
                                                    {errors.product_quantity && (
                                                        <span className="text-danger">
                                                            {errors.product_quantity.message}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        Select
                                                    </label>
                                                    <select
                                                        className="form-select py-2"
                                                        {...register("product_website_name", {
                                                            required: "Please select an option",
                                                        })}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="RajLaxmi">Raj Laxmi</option>
                                                        <option value="GauSwarn">GauSwarn</option>
                                                        <option value="Both">Both</option>
                                                    </select>
                                                    {errors.product_website_name && (
                                                        <span className="text-danger">
                                                            {errors.product_website_name.message}
                                                        </span>
                                                    )}
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="card mb-3">
                                            <div className="card-header">
                                                <h5 className="card-title">Upload Images</h5>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-8'>
                                                    <div className="card-body">
                                                        <div className="mb-3">
                                                            <label className="form-label">Images</label>
                                                            <div className="border p-4 text-center">
                                                                <img src="https://cdn-icons-png.flaticon.com/512/747/747374.png" width="50" alt="upload-icon" />
                                                                <p className="mt-2">Drop or select file</p>
                                                                <small className="text-muted">Drop files here or click to <a href="#">browse</a> through your machine.</small>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                                <div className='col-md-4'>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                                <button type="submit" className="btn btn-primary w-auto px-5">Submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCreate;
