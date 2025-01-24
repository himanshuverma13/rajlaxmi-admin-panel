import React from 'react'
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';

const ProductCreate = () => {
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

                        <div class="card p-4">
                            <h5>Details</h5>
                            <small class="text-muted">Title, short description, image...</small>

                            <div class="mb-3 mt-3">
                                <label for="productName" class="form-label">Product name</label>
                                <input type="text" class="form-control" id="productName" placeholder="Product name" />
                            </div>

                            <div class="mb-3">
                                <label for="subDescription" class="form-label">Sub description</label>
                                <textarea class="form-control" id="subDescription" rows="3" placeholder="Sub description"></textarea>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Content</label>
                                <div class="border p-3">
                                    <div class="d-flex align-items-center mb-2">
                                        <select class="form-select w-auto me-2">
                                            <option selected>Paragraph</option>
                                            <option>Heading</option>
                                            <option>List</option>
                                        </select>
                                        <button class="btn btn-light btn-sm"><b>B</b></button>
                                        <button class="btn btn-light btn-sm"><i>I</i></button>
                                        <button class="btn btn-light btn-sm"><u>U</u></button>
                                        <button class="btn btn-light btn-sm">🔗</button>
                                        <button class="btn btn-light btn-sm">🖼️</button>
                                    </div>
                                    <textarea class="form-control" placeholder="Write something awesome..." rows="4"></textarea>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Images</label>
                                <div class="border p-4 text-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/747/747374.png" width="50" alt="upload-icon" />
                                    <p class="mt-2">Drop or select file</p>
                                    <small class="text-muted">Drop files here or click to <a href="#">browse</a> through your machine.</small>
                                </div>
                            </div>
                        </div>
                        <div className='card p-4'>
                            <h1 class="mb-4">Product Form</h1>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title">Properties</h5>
                                        </div>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="productCode">Product Code</label>
                                                <input type="text" class="form-control" id="productCode" placeholder="Enter product code" />
                                            </div>
                                            <div class="form-group">
                                                <label for="quantity">Quantity</label>
                                                <input type="number" class="form-control" id="quantity" value="0" min="0" />
                                            </div>
                                            <div class="form-group">
                                                <label for="colors">Colors</label>
                                                <select class="form-control" id="colors">
                                                    <option value="">Select colors</option>
                                                    <option value="red">Red</option>
                                                    <option value="blue">Blue</option>
                                                    <option value="green">Green</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="tags">Tags</label>
                                                <input type="text" class="form-control" id="tags" placeholder="Enter tags separated by commas" />
                                            </div>
                                            <div class="form-group">
                                                <label for="gender">Gender</label>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="men" id="men" />
                                                    <label class="form -check-label" for="men">Men</label>
                                                </div>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="women" id="women" />
                                                    <label class="form-check-label" for="women">Women</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="card mb-3">
                                        <div class="card-header">
                                            <h5 class="card-title">Additional Information</h5>
                                        </div>
                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="description">Description</label>
                                                <textarea class="form-control" id="description" rows="4" placeholder="Enter product description"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <label for="price">Price</label>
                                                <input type="number" class="form-control" id="price" placeholder="Enter price" min="0" step="0.01" />
                                            </div>
                                            <div class="form-group">
                                                <label for="image">Upload Image</label>
                                                <input type="file" class="form-control-file" id="image" />
                                            </div>
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCreate;
