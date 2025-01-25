import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Common/SideBar/sidebar";
import Navbar from "../../Common/Navbar/navbar";

// Images
import Product1 from "../../Assets/images/products/s11.jpg";
import Product2 from "../../Assets/images/products/s4.jpg";
import Product3 from "../../Assets/images/products/s5.jpg";
import Product4 from "../../Assets/images/products/s7.jpg";

// React-Icons
import { FaEye, FaPen } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { DeleteProductAPI, GetProductAPI } from "../../Common/APIs/api";
import { UserContext } from "../../Common/UseContext/usecontext";
import { LuDot } from "react-icons/lu";

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
    statusClass: "text-bg-success",
  },
  {
    id: 2,
    image: Product4,
    name: "Body Lotion",
    category: "books",
    date: "Thu, Jan 10 2024",
    status: "Out of Stock",
    price: "$89",
    statusClass: "text-bg-danger",
  },
  {
    id: 3,
    image: Product2,
    name: "Smart Watch",
    category: "fashionbooks",
    date: "Thu, Jan 12 2024",
    status: "InStock",
    price: "$125",
    statusClass: "text-bg-success",
  },
  {
    id: 4,
    image: Product3,
    name: "Glossy Solution",
    category: "electronics",
    date: "Mon, Jan 16 2024",
    status: "InStock",
    price: "$50",
    statusClass: "text-bg-success",
  },
  {
    id: 5,
    image: Product4,
    name: "Derma-E",
    category: "fashionelectronics",
    date: "Wed, Jan 18 2024",
    status: "Out of Stock",
    price: "$650",
    statusClass: "text-bg-danger",
  },
];


const Product = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [currentPrdId, setcurrentPrdId] = useState();
  const [imageError, setimageError] = useState("");

  const { setCurrentProductDetails } = useContext(UserContext);

  const fetchProducts = async () => {
    const response = await GetProductAPI();
    setProductDetails(response?.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductDelete = async (item) => {
    console.log('item: ', item);
    try {
      const response = await DeleteProductAPI(item?.product_id);
      // setProductDetails(updatedProducts);
      setDeleteConfirm(false);
      fetchProducts();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //   productDetails

  const handleProductView = (item) => {
    setCurrentProductDetails(item)
  };
  const handleProductEdit = (item) => {
    setCurrentProductDetails(item)
  };

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
              <div className='mt-3 px-4'>
                <h2 className='fw-bolder'>Product List</h2>
                <p className='text-dark'>Dashboard <LuDot /> Product <LuDot /> <span className='text-muted'>Product List</span>
                </p>
              </div>
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center gap-6 mb-3">
                  <form className="row ">
                    <div class="col-lg-6 dropdown">
                      <button class="btn btn-outline-secondary w-100 text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Stock <span class="float-end">&#9662;</span>
                      </button>
                      <ul class="dropdown-menu custom-dropdown-menu">
                        <li class="form-check">
                          <input class="form-check-input" type="checkbox" id="inStock" />
                          <label class="form-check-label" for="inStock">In stock</label>
                        </li>
                        <li class="form-check mt-2">
                          <input class="form-check-input" type="checkbox" id="lowStock" />
                          <label class="form-check-label" for="lowStock">Low stock</label>
                        </li>
                        <li class="form-check mt-2">
                          <input class="form-check-input" type="checkbox" id="outStock" />
                          <label class="form-check-label" for="outStock">Out of stock</label>
                        </li>
                        <li class="mt-3">
                          <button class="btn custom-btn-apply w-100">Apply</button>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6 position-relative">
                      <input
                        type="text"
                        className="form-control search-chat py-2 ps-5"
                        id="text-srh"
                        placeholder="Search Product"
                      />
                      <i className="ti ti-search position-absolute top-50 start-0 translate-middle-y fs-6 text-dark ms-3"></i>
                    </div>
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
                  <table className="table align-middle table-hover text-nowrap mb-0">
                    <thead className="table-light">
                      <tr>
                        <th scope="col">
                         S No.
                        </th>
                        <th scope="col">Products</th>
                        {/* <th scope="col">Description</th> */}
                        <th scope="col">Date</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productDetails?.map((product, index) => (
                        <tr key={product.id}>
                          <td className="fw-bold">
                            {/* <div className=" mb-0"> */}
                            {++index}
                            {/* </div> */}
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={Product1}
                                className="rounded-3"
                                alt={product?.product_name}
                                width="56"
                                height="56"
                              />
                              <div className="ms-3">
                                <h6 className="mb-0 fs-4">
                                  {product.product_name}
                                </h6>
                                <p className="mb-0">
                                  {product?.product_website_name}
                                </p>
                              </div>
                            </div>
                          </td>
                          {/* <td>
                            <p className="mb-0">{product?.product_description}</p>
                          </td> */}
                          <td>
                            <p className="mb-0">{product?.date}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_price}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_quantity}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_stock}</p>
                          </td>
                          <td>
                            <p className="mb-0">{product?.product_quantity}</p>
                          </td>
                          {/* <td>
                            <div className="d-flex align-items-center">
                              <span
                                className={`${product.statusClass} p-1 rounded-circle`}
                              ></span>
                              <p className="mb-0 ms-2">{product?.status}</p>
                            </div>
                          </td> */}

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
                                <NavLink to={"/productdetails"}>
                                  <li onClick={() => handleProductView(product)}>
                                    <a
                                      className="dropdown-item fw-bold text-dark"

                                    >
                                      <FaEye className="fs-2 me-3" />
                                      View
                                    </a>
                                  </li>
                                </NavLink>
                                <NavLink to={"/productedit"}>
                                  <li onClick={() => handleProductEdit(product)}>
                                    <a
                                      className="dropdown-item fw-bold text-dark"

                                    >
                                      <FaPen className="fs-2 me-3" />
                                      Edit
                                    </a>
                                  </li>
                                </NavLink>
                                <li onClick={() => handleProductDelete(product)}>
                                  <a
                                    className="dropdown-item text-danger fw-bold"

                                  >
                                    <RiDeleteBin5Fill className="fs-3 me-3" />
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
                        <a
                          className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                          href="#!"
                        >
                          <i className="ti ti-chevron-left"></i>
                        </a>
                      </li>
                      <li className="page-item p-1">
                        <a
                          className="page-link border-0 rounded-circle text-dark fs-6 round-32 d-flex align-items-center justify-content-center"
                          href="#!"
                        >
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
