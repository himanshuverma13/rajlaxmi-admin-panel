import React from 'react';
import Sidebar from '../../Common/SideBar/sidebar';
import Navbar from '../../Common/Navbar/navbar';

// Images
import Product1 from "../../Assets/images/products/s11.jpg";
import Product2 from "../../Assets/images/products/s4.jpg";
import Product3 from "../../Assets/images/products/s5.jpg";
import Product4 from "../../Assets/images/products/s7.jpg";

// React-Icons
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

// Sample Product Data
const productsData = [
    {
        id: 1,
        image: Product1,
        name: "Curology Face wash",
        category: "books",
        date: "Thu, Jan 12 2024",
        status: "InStock",
        price: "$275",
        statusClass: "text-bg-success"
    },
    {
        id: 2,
        image: Product4,
        name: "Body Lotion",
        category: "books",
        date: "Thu, Jan 10 2024",
        status: "Out of Stock",
        price: "$89",
        statusClass: "text-bg-danger"
    },
    {
        id: 3,
        image: Product2,
        name: "Smart Watch",
        category: "fashionbooks",
        date: "Thu, Jan 12 2024",
        status: "InStock",
        price: "$125",
        statusClass: "text-bg-success"
    },
    {
        id: 4,
        image: Product3,
        name: "Glossy Solution",
        category: "electronics",
        date: "Mon, Jan 16 2024",
        status: "InStock",
        price: "$50",
        statusClass: "text-bg-success"
    },
    {
        id: 5,
        image: Product4,
        name: "Derma-E",
        category: "fashionelectronics",
        date: "Wed, Jan 18 2024",
        status: "Out of Stock",
        price: "$650",
        statusClass: "text-bg-danger"
    }
];

const Product = () => {
    return (
        <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
            <Sidebar />

            {/* Main Wrapper */}
            <div className="body-wrapper">
                <div className="container-fluid">
                    <Navbar />
                    <div className="product-list">
                        <div className="card">
                            <div className="card-body p-3">
                                <div className="d-flex justify-content-between align-items-center gap-6 mb-3">
                                    <form className="position-relative">
                                        <input
                                            type="text"
                                            className="form-control search-chat py-2 ps-5"
                                            id="text-srh"
                                            placeholder="Search Product"
                                        />
                                        <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
                                    </form>
                                    <a
                                        className="fs-6 text-muted"
                                        href="#!"
                                        data-bs-toggle="tooltip"
                                        data-bs-placement="top"
                                        data-bs-title="Filter list"
                                    >
                                        <i className="ti ti-filter"></i>
                                    </a>
                                </div>

                                <div className="table-responsive border rounded">
                                    <table className="table align-middle text-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" />
                                                    </div>
                                                </th>
                                                <th scope="col">Products</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {productsData.map((product, index) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <div className="form-check mb-0">
                                                            <input className="form-check-input" type="checkbox" />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img src={product.image} className="rounded-3" alt={product.name} width="56" height="56" />
                                                            <div className="ms-3">
                                                                <h6 className="mb-0 fs-4">{product.name}</h6>
                                                                <p className="mb-0">{product.category}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="mb-0">{product.date}</p>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <span className={`${product.statusClass} p-1 rounded-circle`}></span>
                                                            <p className="mb-0 ms-2">{product.status}</p>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0 fs-4">{product.price}</h6>
                                                    </td>
                                                    <td>
                                                        <div className="dropdown">
                                                            <button
                                                                id="dropdownMenuButton1"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="true"
                                                                className="rounded-circle btn-transparent btn-sm px-1 btn shadow-none"
                                                            >
                                                                <i className="ti ti-dots-vertical fs-7 d-block" />
                                                            </button>
                                                            <ul
                                                                className="dropdown-menu dropdown-menu-end bg-gradient"
                                                                aria-labelledby="dropdownMenuButton1"
                                                                style={{
                                                                    position: "absolute",
                                                                    inset: "0px 0px auto auto",
                                                                    margin: 0,
                                                                    transform: "translate3d(0px, 36px, 0px)",
                                                                }}
                                                                data-popper-placement="bottom-end"
                                                            >
                                                                <li>
                                                                    <a className="dropdown-item fw-bold text-dark" href="#">
                                                                    <FaEye className='fs-2 me-3'/>
                                                                        View
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item fw-bold text-dark" href="#">
                                                                    <FaPen className='fs-2 me-3' />
                                                                        Edit
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item text-danger fw-bold" href="#">
                                                                    <RiDeleteBin5Fill  className='fs-3 me-3'/>
                                                                        Delete
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="d-flex align-items-center justify-content-end py-1">
                                    <p className="mb-0 fs-2">Rows per page:</p>
                                    <select className="form-select w-auto ms-0 ms-sm-2 me-8 me-sm-4 py-1 pe-7 ps-2 border-0">
                                        <option>5</option>
                                        <option value="1">10</option>
                                        <option value="2">25</option>
                                    </select>
                                    <p className="mb-0 fs-2">1–5 of 12</p>
                                    <nav aria-label="Pagination">
                                        <ul className="pagination justify-content-center mb-0 ms-8 ms-sm-9">
                                            <li className="page-item p-1">
                                                <a className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center" href="#!">
                                                    <i className="ti ti-chevron-left"></i>
                                                </a>
                                            </li>
                                            <li className="page-item p-1">
                                                <a className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center" href="#!">
                                                    <i className="ti ti-chevron-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
